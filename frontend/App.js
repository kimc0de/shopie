import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

//Redux
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

//Navigation
import {Header} from './src/components/header';
import {Main} from './src/navigators/main';

LogBox.ignoreAllLogs(true); //@TODO: Remove LogBox

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
}
