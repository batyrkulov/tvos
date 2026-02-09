import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export type Edge = 'top' | 'bottom' | 'left' | 'right';

export interface SafeAreaViewProps extends ViewProps {
  children?: ReactNode;
  style?: ViewProps['style'];
  edges?: Edge[];
}
