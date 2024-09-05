import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Badge} from '../badge';

import {styles} from './styles';

export const Category = (props) => {
  return (
    <ScrollView
      style={styles.category}
      bounces
      horizontal
    >
        <TouchableOpacity
          key={1}
          // onPress={() => {}}
        >
          <Badge label='name'/>
        </TouchableOpacity>
    </ScrollView>
  )
}
