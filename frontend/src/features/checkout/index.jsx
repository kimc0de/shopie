import {useEffect, useState} from 'react';
import {
  Button,
  View,
} from 'react-native';
import {Item, Picker} from "native-base";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Octicons from '@expo/vector-icons/Octicons';

import {Form} from '../../components/form';
import {Input} from '../../components/input';
import {countries} from '../../../assets/data/countries';
import {styles} from './styles';

export const Checkout = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();

  const checkout = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
    }

    props.navigation.navigate('Payment', {order: order});
  };

  useEffect(() => {
    setOrderItems(props.cartItems);
  }, []);

  return (
    <KeyboardAwareScrollView
      extraHeight={200}
      viewIsInsideTabBar
      enableOnAndroid
    >
      <Form title="Shipping Address">
        <Input
          placeholder="Phone"
          name="phone"
          id="phone"
          value={phone}
          keyboardType="numeric"
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder="Shipping Address 1"
          name="address1"
          id="address1"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder="Shipping Address 2"
          name="address2"
          id="address2"
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder="City"
          name="city"
          id="city"
          value={city}
          onChangeText={(text) => setCity(text)}
          />
        <Input
          placeholder="Zip"
          name="zip"
          id="zip"
          value={zip}
          keyboardType="numeric"
          onChangeText={(text) => setZip(text)}
        />
        <Input
          placeholder="Country"
          name="country"
          id="country"
          value={country}
          onChangeText={(text) => setCountry(text)}
        />
        {/*@TODO: Fix picker icon issue */}
        {/*<Item>*/}
        {/*  <Picker*/}
        {/*    mode="dialog"*/}
        {/*    style={styles.checkout_countryPicker}*/}
        {/*    iosIcon={<Octicons name="triangle-down" size={24} color="black" />}*/}
        {/*    selectedValue={country}*/}
        {/*    placeholder="Select your country"*/}
        {/*    onValueChange={(country) => setCountry(country)}*/}
        {/*  >*/}
        {/*    {countries.map((country) => {*/}
        {/*      return (*/}
        {/*        <Picker.Item*/}
        {/*          key={country.code}*/}
        {/*          label={country.name}*/}
        {/*          value={country.code}*/}
        {/*        />*/}
        {/*      );*/}
        {/*    })}*/}
        {/*  </Picker>*/}
        {/*</Item>*/}
      </Form>
      <View style={styles.checkout_confirmation}>
        <Button title='Confirm' onPress={() => checkout()} />
      </View>
    </KeyboardAwareScrollView>
  )
}

const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
}

export default connect(mapStateToProps)(Checkout);
