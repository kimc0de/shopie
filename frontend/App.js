import {
  StyleSheet,
  View,
  LogBox,
} from 'react-native';

import {Products} from './src/features/products';
import {Header} from './src/components/header';

LogBox.ignoreAllLogs(true); //@TODO: Remove LogBox

export default function App() {
  return (
      <View style={styles.app}>
        <Header />
        <Products />
      </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
