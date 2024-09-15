import {
  Image,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import Icon from '@expo/vector-icons/FontAwesome';

import {PRODUCT_DETAILS, PRODUCT_FORM} from '../../routes';
import {Button} from '../button';
import * as enums from '../button/enums';

import {styles} from './styles';

export const ListItem = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(false);
        }}
      >
        <View style={styles.modal_wrapper}>
          <View style={styles.modal_view}>
            <TouchableHighlight
              style={styles.modal_container}
              underlayColor="#e8e8e8"
              onPress={() => setIsVisible(false)}
            >
              <Icon name="close" size={30} color="black" />
            </TouchableHighlight>
            <Button title="Edit" onPress={() => [
              props.navigation.navigate(PRODUCT_FORM, {item: props}),
              setIsVisible(false),
            ]}/>
            <Button
              type={enums.DANGER}
              title="Delete"
              onPress={() => {
                props.deleteProduct(props._id);
                setIsVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(PRODUCT_DETAILS, {item: props});
        }}
        onLongPress={() => {
          setIsVisible(true);
        }}
        style={styles.listItem_container}
      >
        <Image
          style={styles.listItem_image}
          resizeMode='contain'
          source={{uri: props.image ? props.image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
        />
        <Text numberOfLines={1} style={styles.listItem_itemName}>{props.name}</Text>
        <Text numberOfLines={1}  style={styles.listItem_item}>{props.category.name}</Text>
        <Text style={styles.listItem_item}>${props.price}</Text>
      </TouchableOpacity>
    </View>
  )
}
