import React, { useMemo } from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SafeAreaViewProps } from './type';
import componentStyle from './style';

const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  edges = ['top', 'bottom'],
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  const padding = useMemo(() => {
    const androidTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
    return {
      ...(edges.includes('top') && { paddingTop: insets.top + androidTop }),
      ...(edges.includes('bottom') && {
        paddingBottom: insets.bottom + (Platform.select({ ios: 0, android: 20 }) as number),
      }),
      ...(edges.includes('left') && { paddingLeft: insets.left }),
      ...(edges.includes('right') && { paddingRight: insets.right }),
    };
  }, [insets.top, insets.bottom, insets.left, insets.right, edges]);

  return (
    <View style={[componentStyle.container, padding, style]} {...rest}>
      {children}
    </View>
  );
};

export default SafeAreaView;
