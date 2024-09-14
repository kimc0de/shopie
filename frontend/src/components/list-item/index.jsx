import {
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {styles} from './styles';

export const ListItem = (props) => {
  return (
    <TouchableOpacity  style={styles.listItem_container}>
      <Image
        style={styles.listItem_image}
        resizeMode='contain'
        source={{uri: props.image ? props.image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
      />
      <Text numberOfLines={1} style={styles.listItem_itemName}>{props.name}</Text>
      <Text numberOfLines={1}  style={styles.listItem_item}>{props.category.name}</Text>
      <Text style={styles.listItem_item}>${props.price}</Text>
    </TouchableOpacity>
  )
}
