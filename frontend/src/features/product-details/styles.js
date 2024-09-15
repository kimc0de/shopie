import {StyleSheet} from 'react-native';
import {
  FontSize,
  FontStyle,
  toDp,
  Space,
} from '../../styles';

export const styles = StyleSheet.create({
  productDetails_container:{
    position: 'relative',
    height: '100%',
    backgroundColor: 'white',
  },
  productDetails_imageContainer: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
  },
  productDetails_image: {
    width: '100%',
    height: toDp(250),
  },
  productDetails_content_container: {
    marginVertical: Space.SPACE_4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetails_itemName: {
    fontSize: FontSize.MEDIUM_2,
    fontWeight: FontStyle.BOLD,
    marginBottom: Space.SPACE_2,
  },
  productDetails_itemBrand: {
    fontSize: FontSize.SMALL_3,
    fontWeight: FontStyle.REGULAR,
  },
  productDetails_bottomContainer: {
    flex: 1,
    maxHeight: toDp(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Space.SPACE_4,
  },
  productDetails_itemPrice: {
    fontSize: FontSize.MEDIUM_2,
    color: 'red',
  },
  productDetails_details: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: Space.SPACE_2,
    marginHorizontal: Space.SPACE_3,
  }
});
