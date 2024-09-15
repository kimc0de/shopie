import {StyleSheet} from 'react-native';
import {
  FontSize,
  Space,
} from '../../styles';

export const styles = StyleSheet.create({
  payment_container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  payment_title: {
    fontSize: FontSize.SMALL_3,
    textAlign: 'center',
    marginVertical: Space.SPACE_2,
  },
  payment_methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Space.SPACE_2,
    gap: Space.SPACE_2,
  },
  payment_cards: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Space.SPACE_2,
  },
  payment_button: {
    marginVertical: Space.SPACE_2,
  },
  payment_confirmation: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Space.SPACE_2,
  }
});
