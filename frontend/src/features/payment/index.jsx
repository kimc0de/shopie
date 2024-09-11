import {
  Button,
  Text,
  View
} from 'react-native';
import {useState} from 'react';
import {Feather} from '@expo/vector-icons';

import {
  paymentCards,
  payments,
} from '../../../assets/data/payments';
import {styles} from './styles';
import {CONFIRM} from '../../routes';

export const Payment = (props) => {
  const order = props.route.params;
  const [selectedPayment, setSelectedPayment] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.payment_container}>
      <View>
      <Text style={styles.payment_title}>
        Choose your payment method
      </Text>
        {payments.map((payment, index) => (
          <View style={styles.payment_methods} key={index}>
            <Button
              style={styles.payment_button}
              key={payment.value}
              title={payment.name}
              onPress={() => {
                setSelectedPayment(payment.value);
                setIsSelected(true);
              }}
            />
            {selectedPayment === payment.value &&
              isSelected &&
              <Feather name="check" size={24} color="black" />
            }
          </View>
        ))}
      {selectedPayment === 3 ? (
        <View>
          {paymentCards.map((card, index) => (
            <View style={styles.payment_cards} key={index}>
            <Button
              key={card.value}
              title={card.name}
              onPress={() => setSelectedCard(card.value)}
            />
            {selectedCard === card.value &&
              isSelected &&
              <Feather name="check" size={24} color="black" />
            }
            </View>
          ))}
        </View>
      ) : null}
      </View>
      <View style={styles.payment_confirmation}>
        <Button
          title="Confirm"
          onPress={() => props.navigation.navigate(CONFIRM, {order})}
        />
      </View>
    </View>
  )
}
