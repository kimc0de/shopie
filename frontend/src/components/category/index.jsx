import {
  ScrollView,
  TouchableOpacity,
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
        onPress={() => {
          props.changeCategory('all'),
          props.setActive(-1)
        }}
      >
        <Badge active={props.active === -1} label="All"/>
      </TouchableOpacity>
      {
        props.categories.map((category) => (
          <TouchableOpacity
            key={`${category.name}-${category._id}`}
            onPress={() => {
              props.changeCategory(category._id),
              props.setActive(props.categories.indexOf(category))
            }}
          >
            <Badge active={props.active === props.categories.indexOf(category)} label={category.name}/>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}
