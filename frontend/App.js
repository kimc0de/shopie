import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

//Context API
import {Auth} from './src/features/auth';

//Redux
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

//Navigation
import {Header} from './src/components/header';
import {Main} from './src/navigators/main';

LogBox.ignoreAllLogs(true); //@TODO: Remove LogBox

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}
