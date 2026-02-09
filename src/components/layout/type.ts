import { ScrollViewProps, StyleProp, ViewProps } from 'react-native';
import { SafeAreaViewProps } from '@/components/safe-area-view/type';

export interface LayoutProps extends SafeAreaViewProps, ScrollViewProps {
  fullWidth?: boolean;
  isScrollable?: boolean;
  scrollViewStyle?: StyleProp<ViewProps>;
}
