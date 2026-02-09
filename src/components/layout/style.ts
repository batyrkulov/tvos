import { StyleSheet } from 'react-native';
import { tvScale } from '@/utils/scaling';


const style = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  horizontalPaddings: {
    paddingHorizontal: tvScale(16),
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {},
});

export default style;
