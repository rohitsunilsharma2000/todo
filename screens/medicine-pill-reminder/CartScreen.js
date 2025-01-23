import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-paper'; // Import for icons

const CartScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Cart Section */}
      <Text style={styles.cartTitle}>My Cart</Text>

      {/* Product Cards */}
      <View style={styles.productCard}>
        <Image
          source={{ uri: 'https://aggripure.com/wp-content/uploads/2021/07/Ayurvedic-Medicine-For-Long-Lasting-In-Bed-1.png' }} // Product Image URL
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Fentanyl Delirium XXL</Text>
          <Text style={styles.productPrice}>$15</Text>
          <Text style={styles.productDescription}>
            Homeopathy, Ayurvedic, Personal Care & More
          </Text>
          <View style={styles.quantitySection}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>6</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.productCard2}>
        <Image
          source={{ uri: 'https://linknutrition.com/cdn/shop/products/19_grande.png?v=1651053436' }} // Product Image URL
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Vitamins & Supplement</Text>
          <Text style={styles.productPrice}>$51</Text>
          <Text style={styles.productDescription}>
            Homeopathy, Ayurvedic, Personal Care & More
          </Text>
          <View style={styles.quantitySection}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>3</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Shipping Address */}
      <View style={styles.shippingSection}>
        <Text style={styles.shippingTitle}>Shipping Address</Text>
        <View style={styles.shippingAddress}>
          <Text style={styles.addressText}>
            3 Newbridge Court Chino Hills, CA 91709 United States
          </Text>
          <TouchableOpacity>
            <Icon name="pencil" size={20} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Amount Section */}
      <View style={styles.shippingSection}>
        <Text style={styles.paymentTitle}>Payment Amount</Text>
        <View style={styles.paymentItem}>
          <Text style={styles.paymentLabel}>Sub Total</Text>
          <Text style={styles.paymentAmount}>$65.00</Text>
        </View>
        <View style={styles.paymentItem}>
          <Text style={styles.paymentLabel}>Shipping Fee</Text>
          <Text style={styles.paymentAmount}>$1.00</Text>
        </View>
        <View style={styles.paymentItem}>
          <Text style={styles.paymentLabel}>Total</Text>
          <Text style={styles.paymentAmount}>$67.00</Text>
        </View>
      </View>

      {/* Make Payment Button */}
      <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate('AddPillScreen')}>
        <Text style={styles.paymentButtonText}>Make Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  productCard: {
    // flexDirection: 'row',
    // backgroundColor: '#D1F7E1', // Light green for Fentanyl
    // padding: 10,
    // borderRadius: 10,
    // marginBottom: 20,
    // alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#D1F7E1', //ffdc8c// Soft yellow background
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    position: 'relative',
    top: 30,
  },
  productCard2: {
    // flexDirection: 'row',
    // backgroundColor: '#D1F7E1', // Light green for Fentanyl
    // padding: 10,
    // borderRadius: 10,
    // marginBottom: 20,
    // alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffdc8c', //ffdc8c// Soft yellow background
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    position: 'relative',
    top: 30,
  },
  productImage: {
    // width: 60,
    // height: 60,
    // borderRadius: 10,
    // marginRight: 10,
    width: 112,
    height: 100,
    borderRadius: 10,
    position: 'absolute',
    top: -15,
    left: 3,
  },
  productInfo: {
    // flex: 1,
    marginLeft:120
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#F1F1F1',
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10,
  },
  shippingSection: {
    marginTop: 4,
    backgroundColor: '#f3f3eb', //ffdc8c// Soft yellow background
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    position: 'relative',
    top: 30,
  },
  shippingTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  shippingAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressText: {
    fontSize: 14,
    color: '#666',
  },
  paymentSection: {
    marginTop: 30,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentLabel: {
    fontSize: 14,
    color: '#333',
  },
  paymentAmount: {
    fontSize: 14,
    color: '#666',
  },
  paymentButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CartScreen;
