import { StyleSheet, Platform } from 'react-native';
import { tvScale, tvVerticalScale } from '@/utils/scaling';

const style = StyleSheet.create({
  banner: {
    height: tvVerticalScale(500),
    overflow: 'hidden',
    margin: tvScale(4),
    marginBottom: tvVerticalScale(40),
    flexDirection: 'row',
    borderTopLeftRadius: tvScale(66),
    borderBottomRightRadius: tvScale(66),
  },
  bannerImage: {
    marginTop: tvVerticalScale(35),
    marginLeft: tvScale(30),
    width: tvScale(600),
    height: tvVerticalScale(400),
    borderTopLeftRadius: tvScale(66),
    borderBottomRightRadius: tvScale(66),
  },
  card: {
    width: tvScale(240),
    height: tvVerticalScale(Platform.isTVOS ? 360: 300),
    borderRadius: tvScale(12),
    overflow: 'hidden',
    marginRight: tvScale(20),
    marginLeft: tvScale(2),
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: tvScale(16),
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  bannerTitleContainer: {
    flex: 1,
    padding: tvScale(30),
  },
  bannerTitle: {
    color: '#fff',
    fontSize: tvScale(48),
    fontWeight: 'bold',
  },
  bannerDesc: {
    width: tvScale(500),
    marginTop: tvVerticalScale(20),
    fontSize: tvScale(23),
    color: 'white',
  },
  cardTitle: {
    color: '#fff',
    fontSize: tvScale(20),
    fontWeight: '600',
  },
  focusedIOS: {
    borderWidth: tvScale(3),
    borderColor: 'white',
  },
  focusedAndroid: {
    outlineWidth: tvScale(4),
    outlineColor: 'white',
  },
  focusedCardAdditional: {
    height: tvVerticalScale(Platform.isTVOS ? 420: 350),
    width: tvScale(270),
  },
});

export default style;