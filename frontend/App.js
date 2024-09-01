import {
  StyleSheet,
  View
} from 'react-native';

import {Products} from './src/features/products';
import {Header} from '../frontend/src/components/header';

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
    justifyContent: 'center',
    marginTop: 100, //@TODO: Remove this line later
  },
});
