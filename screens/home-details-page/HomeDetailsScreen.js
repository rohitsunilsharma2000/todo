import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const HomeDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.greeting}>Hi Jhalok</Text>
      <Text style={styles.subGreeting}>Good Morning!</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Doctors"
          placeholderTextColor="#8e8e8e"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={{ uri: 'filter-icon-url' }} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.promotionContainer}>
      <View style={styles.leftContent}>
        <Text style={styles.promotionText}>Looking Specialist Doctor?</Text>
        <Text style={styles.promotionSubtitle}>
          Upload a Prescription and Tell Us what you Need. We do the Rest!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rightContent}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png',
          }}
          style={styles.image}
        />
      </View>
    </View>

   
    <View style={styles.offerContainer}>
      {/* Left Content */}
      <View style={styles.leftContent}>
        <Text style={styles.offerText}>UPTO 80% OFFER*</Text>
        <Text style={styles.offerSubtitle}>On Health Products</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SHOP NOW</Text>
        </TouchableOpacity>
        <Text style={styles.offerDescription}>
          Homeopathy, Ayurvedic, Personal Care & More
        </Text>
      </View>

      {/* Right Content (Image Slider) */}
      <View style={styles.rightContent}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-clipart/20190604/original/pngtree-colored-pills-capsules-png-image_1428469.jpg',
            }}
            style={styles.productImage}
          />
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWcVx2rloniX0sbaCsgFRmKk8UMc-8yzmKA&s',
            }}
            style={styles.productImage}
          />
        </ScrollView>
      </View>
    </View>
    <View style={styles.popularContainer}>
      <Text style={styles.popularText}>Popular Medicine</Text>
      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>SEE ALL</Text>
      </TouchableOpacity>
      <ScrollView horizontal style={styles.productScroll}>
        <View style={styles.productItem}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/923/884/non_2x/pastel-color-medicine-pills-pills-flying-up-out-of-tablet-capsule-3d-rendering-pharmacy-concept-drugs-awareness-free-png.png' }} style={styles.productImage} />
          <Text style={styles.productName}>Nutritional Drinks</Text>
        </View>
        <View style={styles.productItem}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/923/884/non_2x/pastel-color-medicine-pills-pills-flying-up-out-of-tablet-capsule-3d-rendering-pharmacy-concept-drugs-awareness-free-png.png' }} style={styles.productImage} />
        <Text style={styles.productName}>Ayurveda</Text>
        </View>
        <View style={styles.productItem}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/923/884/non_2x/pastel-color-medicine-pills-pills-flying-up-out-of-tablet-capsule-3d-rendering-pharmacy-concept-drugs-awareness-free-png.png' }} style={styles.productImage} />
        <Text style={styles.productName}>Vitamins & Supplements</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/923/884/non_2x/pastel-color-medicine-pills-pills-flying-up-out-of-tablet-capsule-3d-rendering-pharmacy-concept-drugs-awareness-free-png.png' }} style={styles.productImage} />
          <Text style={styles.productName}>Nutritional Drinks</Text>
        </View>
        <View style={styles.productItem}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/923/884/non_2x/pastel-color-medicine-pills-pills-flying-up-out-of-tablet-capsule-3d-rendering-pharmacy-concept-drugs-awareness-free-png.png' }} style={styles.productImage} />
        <Text style={styles.productName}>Ayurveda</Text>
        </View>
        <View style={styles.productItem}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/923/884/non_2x/pastel-color-medicine-pills-pills-flying-up-out-of-tablet-capsule-3d-rendering-pharmacy-concept-drugs-awareness-free-png.png' }} style={styles.productImage} />
        <Text style={styles.productName}>Vitamins & Supplements</Text>
        </View>
      </ScrollView>
    </View>
    

  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 30,
    fontWeight: '600',
    color: '#4CAF50',
  },
  subGreeting: {
    fontSize: 16,
    color: '#808080',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 3, // shadow effect
  },
  searchInput: {
    flex: 1,
    height: 45,
    paddingLeft: 15,
    fontSize: 16,
    color: '#000',
    borderRadius: 5,
  },
  filterButton: {
    padding: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  promotionContainer: {
    backgroundColor: '#D1C4E9',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  promotionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  promotionSubtitle: {
    fontSize: 14,
    color: '#808080',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  offerContainer: {
    backgroundColor: '#A5D6A7',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
  },
  offerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4CAF50',
  },
  offerSubtitle: {
    fontSize: 16,
    color: '#808080',
    marginVertical: 10,
  },
  offerDescription: {
    fontSize: 12,
    color: '#808080',
    marginBottom: 15,
  },
  productScroll: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  popularContainer: {
    paddingVertical: 20,
  },
  popularText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  seeAllButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  seeAllText: {
    color: '#4CAF50',
    fontSize: 14,
  },
  productItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  productName: {
    fontSize: 14,
    color: '#808080',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerIcon: {
    alignItems: 'center',
  },promotionContainer: {
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#D1C4E9',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  leftContent: {
    flex: 1,
    justifyContent: 'center',
  },
  promotionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  promotionSubtitle: {
    fontSize: 14,
    color: '#808080',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  rightContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },offerContainer: {
    flexDirection: 'row', // Horizontal layout for left and right content
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#A5D6A7',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  leftContent: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
  },
  offerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  offerSubtitle: {
    fontSize: 14,
    color: '#808080',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: 120,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  offerDescription: {
    fontSize: 12,
    color: '#808080',
    marginBottom: 15,
  },
  rightContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  productImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    resizeMode: 'contain',
  },
});

export default HomeDetailsScreen;
