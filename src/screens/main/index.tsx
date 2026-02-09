import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  FlatList,
  ImageBackground,
  Text,
  TVFocusGuideView,
} from 'react-native';

import { AppRoutes, NavigatorParamList } from '@/types/navigation';
import Card from '@components/card';
import Layout from '@/components/layout';

import styles from './style';
import { MOCK_SECTIONS } from './videos';

export default function MainScreen({}: NativeStackScreenProps<NavigatorParamList, AppRoutes.MainScreen>) {
  return (
    <ImageBackground
      resizeMode='cover'
      style={styles.imageBackground}
      source={require('@assets/bg.png')}
    >
      <Layout style={styles.layout} isScrollable>
        {MOCK_SECTIONS.map(({ title, data, isBanner }) => (
          <TVFocusGuideView autoFocus key={title}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <FlatList
              contentContainerStyle={!isBanner && styles.cardsFlatListContentContainer}
              horizontal
              data={data}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item: section }) => (
                  <Card
                    item={section}
                    isBanner={isBanner}
                  />
              )}
            />
          </TVFocusGuideView>
        ))}
      </Layout>
    </ImageBackground>
  );
}
