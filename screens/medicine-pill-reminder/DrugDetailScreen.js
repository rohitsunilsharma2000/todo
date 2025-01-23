import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrugDetailScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Product Section */}
      <View style={styles.productSection}>
        <Image
          source={{ uri: 'https://aggripure.com/wp-content/uploads/2021/07/Ayurvedic-Medicine-For-Long-Lasting-In-Bed-1.png' }} // Product Image URL
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Fentanyl</Text>
          <Text style={styles.productTitle}>Delirium XXL</Text>
          <View style={styles.iconsSection}>
              <View style={styles.iconItem}>
                <Icon name="medkit" size={20} color="#6b6554" />
                <Text style={styles.iconText}>3x Daily</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="shield" size={20} color="#6b6554" />
                <Text style={styles.iconText}>RX Safe</Text>
              </View>
            </View>
          <Text style={styles.price}>$55</Text>
        </View>
      </View>

      {/* About Drug Section */}
      <Text style={styles.sectionTitle}>About Drug</Text>
      <Text style={styles.description}>
        Dr. Bellamy Nicholas is a top specialist at London Bridge Hospital in London. He has achieved several awards and recognition.{' '}
        <TouchableOpacity>
          <Text style={styles.readMore}>Read More</Text>
        </TouchableOpacity>
      </Text>

      {/* Drug Alternatives Section */}
      <Text style={styles.sectionTitle}>Drug Alternatives</Text>
      <View style={styles.alternativesSection}>
        <View style={styles.alternativeItem}>
          <Image
            source={{ uri: 'https://www.bigbasket.com/media/uploads/p/l/263696_6-vicks-vapo-rub-with-menthol-camphor-eucalyptus-oil-provides-relief-from-cold.jpg' }} // Alternative Image URL
            style={styles.alternativeImage}
          />
          <View style={styles.alternativeInfo}>
            <View style={styles.nameDosageRow}>
              <Text style={styles.alternativeName}>Acarbose</Text>
              <Text style={styles.dosage}>50mg</Text>
            </View>
            <View style={styles.iconsSection}>
              <View style={styles.iconItem2}>
                <Icon name="medkit" size={20} color="grey" />
                <Text style={styles.iconText}>1x Daily</Text>
              </View>
              <View style={styles.iconItem2}>
                <Icon name="shield" size={20} color="grey" />
                <Text style={styles.iconText}>RX Safe</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.alternativeItem}>
          <Image
            source={{ uri: 'https://d1s24u4ln0wd0i.cloudfront.net/med/23418/vico-plus-vixon-25-ml_17347765800dc91bc4f6c34a56970eaf698ed1167b.webp' }} // Alternative Image URL
            style={styles.alternativeImage}
          />
          <View style={styles.alternativeInfo}>
            <View style={styles.nameDosageRow}>
              <Text style={styles.alternativeName}>Benefix</Text>
              <Text style={styles.dosage}>100mg</Text>
            </View>
            <View style={styles.iconsSection}>
              <View style={styles.iconItem2}>
                <Icon name="medkit" size={20} color="grey" />
                <Text style={styles.iconText}>3x Daily</Text>
              </View>
              <View style={styles.iconItem2}>
                <Icon name="shield" size={20} color="grey" />
                <Text style={styles.iconText}>RX Safe</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Buy Now Button */}
       {/* <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('CheckoutScreen')}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>  */}
       <View style={styles.touchableOpacityContainer}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed')}>
        <Text style={styles.buttonText}>Buy Now</Text>
        <Icon name="arrow-right" size={20} color="#fff" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.plusButton}>
        <Icon name="plus" size={20} color="#fff" style={styles.icon2} />
      </TouchableOpacity>
    </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  productSection: {
    flexDirection: 'row',
    backgroundColor: '#ffdc8c', // Soft yellow background
    borderRadius: 30,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    position: 'relative',
    top: 30,
  },
  productImage: {
    width: 112,
    height: 230,
    borderRadius: 10,
    position: 'absolute',
    top: -73,
    left: 3,
  },
  productInfo: {
    flex: 1,
    marginLeft: 140,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 25,
    fontWeight: '900',
    color: '#4CAF50',
    marginTop: 10,
  },
  dosageSafety: {
    flexDirection: 'row',
    marginLeft: 10,
    fontWeight: '600',
  },
  dosage: {
    fontSize: 10,
    color: '#666',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 4,
    marginLeft:3
  },
  safety: {
    fontSize: 14,
    color: '#666',
    // marginLeft: 10,
    // backgroundColor: 'white',
    // borderRadius: 10,
    // padding: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  readMore: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  alternativesSection: {
    flexDirection: 'column',
    marginTop: 10,
  },
  alternativeItem: {
    flexDirection: 'row',
    // backgroundColor: '#F1F1F1', // Light background for the alternative item
    padding: 15,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 0.2, // Adding 1px border
    borderColor: '#6b6554', // Setting the border color to #666

  },
  alternativeImage: {
    width:100,
    height: 90,
    borderRadius: 30,
    marginRight: 10,
    // backgroundColor:'red'
  },
  alternativeInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameDosageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10
  },
  alternativeName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginRight: 5,
  },
  dosage: {
    fontSize: 14,
    color: '#666',
  },
  iconsSection: {
    flexDirection: 'row',
    marginTop: 9,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
borderRadius:10,
    borderWidth: 0.5, // Adding 1px border
    borderColor: '#6b6554', // Setting the border color to #666
    // padding:10,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    paddingTop:2

  },

  iconItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
borderRadius:10,
   
    // padding:10,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    paddingTop:2

  },
  iconText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  touchableOpacityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
  

    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40, // Increased horizontal padding for more width
    borderRadius: 30,
    width: 300, // Optionally set a fixed width
    height:56
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 70,
  },
  icon: {
    marginLeft: 20,
  },
  icon2: {
    marginLeft: 17,
    marginTop:9
  },
  plusButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    marginLeft: 10,
    padding: 10,
    height:56,
    width:70
  },
});

export default DrugDetailScreen;
