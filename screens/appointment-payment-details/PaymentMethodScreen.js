import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons

const PaymentMethodScreen = ({navigation}) => {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [isCardSelected, setIsCardSelected] = useState(true);

  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
    setIsCardSelected(method === 'card');
  };

  const handleContinue = () => {
    // Proceed to the next step after selecting payment method
    navigation.navigate('AppointmentScreen'); // Replace 'NextScreen' with your next screen
    console.log('Payment method selected:', selectedPayment);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Payment Method</Text>

      {/* Credit/Debit Card Selection */}
      <View style={styles.cardSelectionContainer}>
        <TouchableOpacity
          style={styles.paymentMethodButton}
          onPress={() => handlePaymentChange('card')}
        >
          <Icon name="credit-card" size={30} color="#FFB400" />
          <Text style={styles.paymentMethodText}>Credit/Debit Card</Text>
        </TouchableOpacity>

        {isCardSelected && (
          <View style={styles.cardDetails}>
            <Text style={styles.cardText}>3455 4562 7710 3507</Text>
            <Text style={styles.cardText}>John Carter</Text>
            <Text style={styles.cardText}>Expiry: 02/30</Text>
          </View>
        )}

        <TouchableOpacity style={styles.addNewCardButton}>
          <Text style={styles.addNewCardText}>+ Add New Card</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Method Options */}
      <Text style={styles.orText}>or</Text>

      <View style={styles.paymentMethodOptions}>
        <TouchableOpacity onPress={() => handlePaymentChange('paypal')} style={styles.optionButton}>
          <Image source={{ uri: 'https://www.paypalobjects.com/webstatic/icon/pp258.png' }} style={styles.optionIcon} />
          <Text style={styles.paymentMethodText}>Paypal</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePaymentChange('bikash')} style={styles.optionButton}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bikash_logo.svg/1200px-Bikash_logo.svg.png' }} style={styles.optionIcon} />
          <Text style={styles.paymentMethodText}>Bikash</Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F8F8F8',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
    cardSelectionContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    paymentMethodButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    paymentMethodText: {
      fontSize: 18,
      marginLeft: 10,
    },
    cardDetails: {
      marginTop: 10,
      marginBottom: 20,
    },
    cardText: {
      fontSize: 16,
      color: '#555',
    },
    addNewCardButton: {
      marginTop: 10,
    },
    addNewCardText: {
      color: '#4CAF50',
      fontSize: 16,
      textAlign: 'center',
    },
    orText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#555',
      marginBottom: 20,
    },
    paymentMethodOptions: {
      marginBottom: 20,
    },
    optionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    optionIcon: {
      width: 30,
      height: 30,
    },
    continueButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    continueText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  
  export default PaymentMethodScreen;
  
