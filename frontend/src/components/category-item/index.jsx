import {
  Text,
  View
} from 'react-native';
import {Button} from '../button';
import * as enums from '../button/enums';

import {styles} from './styles';

export const CategoryItem = (props) => {
  return (
    <View style={styles.categoryItem_container}>
      <Text>{props.item.name}</Text>
      <Button
        title='Delete'
        type={enums.DANGER}
        onPress={() => props.delete(props.item._id)}
      />
    </View>
  );
}
