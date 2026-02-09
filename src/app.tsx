import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from '@/navigation/root/';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
