import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CONTAINER_WIDTH = width / 2 - 20;
const CONTAINER_HEIGHT = width / 1.5;
const IMAGE_WIDTH = width / 3;
const IMAGE_HEIGHT = width / 3;
const CARD_HEIGHT = width / 2 - 20 - 9;

export const styles = StyleSheet.create({
    productContainer_wrapper: {
        marginTop: 10,
        paddingBottom: 100,
    },
    productList_wrapper: {
        width: width / 2,
        backgroundColor: '#f8f7e2',
    },
    productCard_container: {
        width: CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 8,
        backgroundColor: 'white',
    },
    productCard_image: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        backgroundColor: 'transparent',
        position: 'absolute',
        marginTop: 10,
    },
    productCard: {
        width: IMAGE_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: 'transparent',
    },
    productCard_title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    productCard_price: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    productCard_add: {
        marginBottom: 60,
    },
    productCard_unavailable: {
        marginTop: 20,
        color: 'red',
        textAlign: 'center',
    },
});
