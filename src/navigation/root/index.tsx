import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigatorParamList, AppRoutes } from '@/types/navigation/';
import MainScreen from '@/screens/main/';
import PlayerScreen from '@/screens/player/';


const Stack = createNativeStackNavigator<NavigatorParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoutes.MainScreen} component={MainScreen} />
      <Stack.Screen name={AppRoutes.PlayerScreen} component={PlayerScreen} />
    </Stack.Navigator>
  );
}
