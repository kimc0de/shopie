import {
  Image,
  SafeAreaView
} from 'react-native';

import {styles} from './styles';

const imageSource = require('../../../assets/images/logo_2.png');

export const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        style={styles.header_image}
        resizeMode='contain'
        source={imageSource}
      />
    </SafeAreaView>
  )
}
