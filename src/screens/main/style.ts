import { StyleSheet } from 'react-native';
import { tvScale, tvVerticalScale } from '@/utils/scaling';

const style = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  layout: {
    flex: 1,
    paddingTop: tvVerticalScale(60),
    marginHorizontal: tvScale(40),
  },
  sectionTitle: {
    color: '#fff',
    fontSize: tvScale(36),
    fontWeight: 'bold',
    marginBottom: tvVerticalScale(20),
    marginTop: tvVerticalScale(40),
  },
  cardsFlatListContentContainer: {
    paddingVertical: tvVerticalScale(20),
    alignItems: 'center',
  }
});

export default style;