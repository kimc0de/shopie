import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Header} from './src/components/header';
import {Main} from './src/navigators/main';

LogBox.ignoreAllLogs(true); //@TODO: Remove LogBox

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
    </NavigationContainer>
  );
}
