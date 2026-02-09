import { StyleSheet } from 'react-native';

import { tvScale, tvVerticalScale } from '@/utils/scaling';

const style = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000' 
  },
  video: { 
    ...StyleSheet.absoluteFillObject 
  },
  bufferingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seekFeedback: {
    position: 'absolute',
    top: '30%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: tvVerticalScale(12),
    paddingHorizontal: tvScale(24),
    borderRadius: tvScale(12),
  },
  seekText: {
    color: '#ffffff',
    fontSize: tvScale(48),
    fontWeight: 'bold',
  },
  resumeMessage: {
    position: 'absolute',
    top: '30%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingVertical: tvVerticalScale(16),
    paddingHorizontal: tvScale(32),
    borderRadius: tvScale(12),
  },
  resumeText: {
    color: '#ffffff',
    fontSize: tvScale(24),
    fontWeight: '600',
    textAlign: 'center',
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerPlayPause: {
    width: tvScale(140),
    height: tvScale(140),
    borderRadius: tvScale(70),
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerIcon: {
    color: '#ffffff',
    fontSize: tvScale(70),
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: tvVerticalScale(40),
    left: tvScale(40),
    width: tvScale(60),
    height: tvScale(60),
    borderRadius: tvScale(30),
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: '#ffffff',
    fontSize: tvScale(40),
    fontWeight: 'bold',
  },
  bottomBar: {
    position: 'absolute',
    bottom: tvVerticalScale(40),
    left: tvScale(40),
    right: tvScale(40),
    backgroundColor: 'rgba(0,0,0,0.65)',
    borderRadius: tvScale(16),
    paddingVertical: tvVerticalScale(20),
    paddingHorizontal: tvScale(24),
  },
  metadata: {
    alignItems: 'center',
    marginBottom: tvVerticalScale(20),
  },
  episodeTitle: {
    color: '#ffffff',
    fontSize: tvScale(32),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  seriesInfo: {
    color: '#dddddd',
    fontSize: tvScale(18),
    textAlign: 'center',
    marginTop: tvVerticalScale(6),
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tvScale(16),
  },
  timeText: {
    color: '#ffffff',
    fontSize: tvScale(16),
    minWidth: tvScale(60),
    textAlign: 'center',
  },
  progressTrack: {
    flex: 1,
    height: tvScale(8),
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: tvScale(4),
    position: 'relative',
  },
  progressFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ff2d55',
    borderRadius: tvScale(4),
  },
  thumb: {
    width: tvScale(24),
    height: tvScale(24),
    borderRadius: tvScale(12),
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: tvScale(-8),
    borderWidth: tvScale(4),
    borderColor: '#ff2d55',
    transform: [{ translateX: tvScale(-12) }],
  },
});

export default style;
