import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Text,
  View,
  useTVEventHandler,
} from 'react-native';
import Video, { OnLoadData, OnProgressData, VideoRef } from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppRoutes, NavigatorParamList } from '@/types/navigation';
import { useAppStore } from '@store/use=app-store';

import styles from './style';

const CONTROLS_SHOW_TIME = 3500;
const SEEK_AMOUNT = 10;
const POSITION_SAVE_INTERVAL = 2500;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function PlayerScreen(
  { route: { params: { title, desc } } }: NativeStackScreenProps<NavigatorParamList, AppRoutes.PlayerScreen>
) {
  const navigation = useNavigation();
  const {
    currentVideoUrl,
    getPlaybackPosition,
    setPlaybackPosition,
    resetPlayer,
  } = useAppStore();

  const videoRef = useRef<VideoRef>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [seekFeedback, setSeekFeedback] = useState<string | null>(null);
  const [showResumeMessage, setShowResumeMessage] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const hideTimer = useRef<NodeJS.Timeout | null>(null);
  const lastSaveTime = useRef<number>(0);

  const savedPosition = currentVideoUrl ? getPlaybackPosition(currentVideoUrl) : 0;

  useEffect(() => {
    setCurrentTime(savedPosition);
  }, [currentVideoUrl]);

  const resetControlsTimer = async () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setShowControls(true));
    await sleep(CONTROLS_SHOW_TIME);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setShowControls(false));
  };

  const showSeekFeedback = async (text: string) => {
    setSeekFeedback(text);
    await sleep(1200);
    setSeekFeedback(null);
  };

  const seek = (seconds: number) => {
    if (!currentVideoUrl) return;
    const newTime = Math.max(0, Math.min(currentTime + seconds, duration));
    videoRef.current?.seek(newTime);
    setCurrentTime(newTime);
    setPlaybackPosition(currentVideoUrl, newTime);
    showSeekFeedback(seconds > 0 ? `+${seconds}s` : `${seconds}s`);
    resetControlsTimer();
  };

  useTVEventHandler((evt) => {
    if (!evt || !evt.eventType) return;

    resetControlsTimer();

    if (evt.eventType === 'playPause' || evt.eventType === 'select') {
      setIsPlaying(prev => !prev);
    }

    if (evt.eventType === 'left') {
      seek(-SEEK_AMOUNT);
    }

    if (evt.eventType === 'right') {
      seek(SEEK_AMOUNT);
    }

    if (evt.eventType === 'menu') {
      if (currentVideoUrl) {
        setPlaybackPosition(currentVideoUrl, currentTime);
      }
      resetPlayer();
      navigation.goBack();
    }
  });

  const onLoad = async (data: OnLoadData) => {
    setDuration(data.duration);

    if (savedPosition > 1 && savedPosition < data.duration - 1) {
      videoRef.current?.seek(savedPosition);
      setCurrentTime(savedPosition);
      setShowResumeMessage(true);
      await sleep(3000);
      setShowResumeMessage(false);
    }
  };

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
    setIsBuffering(false);
  };

  useEffect(() => {
    if (!currentVideoUrl || currentTime <= 0) return;

    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastSaveTime.current >= POSITION_SAVE_INTERVAL) {
        setPlaybackPosition(currentVideoUrl, currentTime);
        lastSaveTime.current = now;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentVideoUrl, currentTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (currentVideoUrl) {
        setPlaybackPosition(currentVideoUrl, currentTime);
      }
    };
  }, [currentVideoUrl, currentTime]);

  if (!currentVideoUrl) {
    return (
      <View style={styles.container}>
        <Text>No video selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: currentVideoUrl }}
        style={styles.video}
        resizeMode="contain"
        paused={!isPlaying}
        onLoad={onLoad}
        onProgress={onProgress}
        onBuffer={({ isBuffering }) => setIsBuffering(isBuffering)}
        repeat={false}
        controls={false}
      />

      {isBuffering && (
        <View style={styles.bufferingOverlay}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}

      {seekFeedback && (
        <View style={styles.seekFeedback}>
          <Text style={styles.seekText}>{seekFeedback}</Text>
        </View>
      )}

      {showResumeMessage && (
        <View style={styles.resumeMessage}>
          <Text style={styles.resumeText}>Contine watching</Text>
        </View>
      )}

      <Animated.View
        style={[
          styles.controlsOverlay,
          {
            opacity: fadeAnim,
            pointerEvents: showControls ? 'auto' : 'none',
          },
        ]}
      >
        <View style={styles.centerPlayPause}>
          <Text style={styles.centerIcon}>{isPlaying ? '‖' : '▶'}</Text>
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.metadata}>
            <Text style={styles.episodeTitle}>{title}</Text>
            <Text style={styles.seriesInfo}>
              {desc}
            </Text>
          </View>

          <View style={styles.progressRow}>
            <Text style={styles.timeText}>{formatTime(currentTime)}</Text>

            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` },
                ]}
              />
              <View
                style={[
                  styles.thumb,
                  { left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` },
                ]}
              />
            </View>

            <Text style={styles.timeText}>{formatTime(duration)}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

