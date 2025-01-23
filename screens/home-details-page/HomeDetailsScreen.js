import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView ,FlatList} from 'react-native';
import PopularDepartmentAndMedicine from '../landing/PopularDepartmentAndMedicine';
import SpecialistScreen from './SpecialistScreen';

const HomeDetailsScreen = ({navigation}) => {
  const productImages = [
    {
      id: '1',
      uri: 'https://png.pngtree.com/png-clipart/20190604/original/pngtree-colored-pills-capsules-png-image_1428469.jpg',
    },
    {
      id: '2',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWcVx2rloniX0sbaCsgFRmKk8UMc-8yzmKA&s',
    },
  ];

  const renderProductImage = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.productImage} />
  );


  const data = [
    { key: 'header' },
    { key: 'promotion' },
    { key: 'offer' },
    { key: 'popular' },
    { key: 'doctor' },

    
  ];

  
  const renderItem = ({ item }) => {
    switch (item.key) {
      case 'header':
        return (
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
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3678/3678587.png' }} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'promotion':
        return (
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
        );
      case 'offer':
        return (
          <View style={styles.offerContainer}>
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
            <View style={styles.rightContent}>
              <FlatList
                data={productImages}
                renderItem={renderProductImage}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        );
      case 'popular':
        return <PopularDepartmentAndMedicine  navigation={navigation}/>;
        case 'doctor':
          return <  SpecialistScreen navigation={navigation}/>;

      
      default:
        return null;
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
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
