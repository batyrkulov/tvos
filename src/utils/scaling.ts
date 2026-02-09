import { PixelRatio, Platform } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';

export const isTvOS = Platform.OS === 'ios' && Platform.constants?.interfaceIdiom === 'tv';

export const s = (size: number) => {
  if (Platform.OS === 'android') {
    const density = PixelRatio.get();
    const factor = density > 3 ? 0.35 : 0.38;
    return moderateScale(size * factor, 0.3);
  }
  return size;
};

export const vs = (size: number) => {
  if (Platform.OS === 'android') {
    const density = PixelRatio.get();
    const factor = density > 3 ? 0.38 : 0.42;
    return verticalScale(size * factor);
  }
  return size;
};

export const ms = (size: number, factor = 0.5) => {
  if (Platform.OS === 'android') {
    const density = PixelRatio.get();
    const scaleFactor = density > 3 ? 0.35 : 0.38;
    return moderateScale(size * scaleFactor, factor);
  }
  return size;
};

export const tvScale = (size: number) => {
  if (Platform.OS === 'android') {
    const density = PixelRatio.get();
    const factor = density > 3 ? 0.35 : 0.38;
    return moderateScale(size * factor, 0.3);
  }
  return size;
};

export const tvVerticalScale = (size: number) => {
  if (Platform.OS === 'android') {
    const density = PixelRatio.get();
    const factor = density > 3 ? 0.38 : 0.42;
    return verticalScale(size * factor);
  }
  return size;
};