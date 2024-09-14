import {Text, View} from 'react-native';

import {styles} from './styles';

export const ListHeader = () => {
  return (
    <View style={styles.listHeader_container}>
      <View style={styles.listHeader_item}>
        <Text style={styles.listHeader_itemText}>Image</Text>
      </View>
      <View style={styles.listHeader_item}>
        <Text style={styles.listHeader_itemText}>Name</Text>
      </View>
      <View style={styles.listHeader_item}>
        <Text  style={styles.listHeader_itemText}>Category</Text>
      </View>
      <View style={styles.listHeader_item}>
        <Text  style={styles.listHeader_itemText}>Price</Text>
      </View>
    </View>
  )
}
