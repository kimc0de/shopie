import {
  Image,
  View,
} from 'react-native';

import {styles} from './styles';

const imageSource = require('../../../assets/images/logo.png');

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.header_image}
        resizeMode='contain'
        source={imageSource}
      />
    </View>
  )
}
