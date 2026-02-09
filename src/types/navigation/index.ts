import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackScreenProps<T extends keyof NavigatorParamList> = NativeStackScreenProps<
  NavigatorParamList,
  T
>;

export type NavigationProp = NativeStackNavigationProp<NavigatorParamList>;

export type NavigatorParamList = {
  MainScreen: undefined;
  PlayerScreen: {
    title: string;
    desc: string;
  };
};

export enum AppRoutes {
  MainScreen = 'MainScreen',
  PlayerScreen = 'PlayerScreen',
}

