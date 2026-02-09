import React, { useRef } from 'react';
import {
  Animated,
  Image,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppStore } from '@store/use=app-store';
import { AppRoutes, NavigationProp } from '@/types/navigation';

import { CardProps } from './type';
import styles from './style';

export default function Card({ item: { poster, videoUrl, title, episodeDesc, desc }, isBanner = false }: CardProps) {
  const navigation = useNavigation<NavigationProp>();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const { setCurrentVideo } = useAppStore();

  const handleFocus = () => {
    Animated.spring(scaleAnim, {
      toValue: isBanner ? 1.02 : 1.03,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    setCurrentVideo(videoUrl);
    navigation.navigate(AppRoutes.PlayerScreen, { title, desc: episodeDesc });
  };

  return (
    <Pressable
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPress={handlePress}
      style={({ focused }) => [
        isBanner ? styles.banner : styles.card,
        (focused && Platform.isTVOS ) && styles.focusedIOS,
        (focused && !Platform.isTVOS ) && styles.focusedAndroid,
        (focused && !isBanner) && styles.focusedCardAdditional, 
      ]}
      hasTVPreferredFocus={isBanner}
    >
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Image
          source={{ uri: poster }}
          style={isBanner ? styles.bannerImage : styles.cardImage}
          resizeMode="cover"
        />
        {!isBanner && <View style={styles.overlay}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>}
      </Animated.View>
      {isBanner && <View style={styles.bannerTitleContainer}>
        <Text style={styles.bannerTitle}>{title}</Text>
        <Text style={styles.bannerDesc}>{desc}</Text>
      </View>}
    </Pressable>
  );
}