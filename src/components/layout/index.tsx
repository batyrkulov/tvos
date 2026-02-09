import { ScrollView } from 'react-native';

import SafeAreaView from '@/components/safe-area-view';

import componentStyle from './style';
import { LayoutProps } from './type';

const Layout: React.FC<LayoutProps> = ({
  children,
  style,
  scrollViewStyle,
  contentContainerStyle,
  fullWidth,
  isScrollable,
  ...rest
}) => {
  return (
      <SafeAreaView
        style={[
          style,
          componentStyle.viewContainer,
          !fullWidth && componentStyle.horizontalPaddings,
        ]}
        {...rest}
      >
        {isScrollable ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[componentStyle.scrollView, scrollViewStyle]}
            contentContainerStyle={[componentStyle.contentContainer, contentContainerStyle]}
          >
            {children}
          </ScrollView>
        ) : (
          children
        )}
      </SafeAreaView>
  );
};

export default Layout;
