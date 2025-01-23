
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PopularDepartmentAndMedicine = ({navigation}) => {
  const popularMedicine = [
    { name: 'Nutritional Drinks', imageUrl: 'https://pngfile.net/download/5kUsX7RyCcuLiqafP9qGllTOY9zFhuM2Qpv013ARsJIy3TBZyIMWMDYJOjPHmgD6g8Z1wNRIxrUhyrolFnlyRTvjGrHMGe8Gt56AN479gbmE5uikU9wyAvrjFnXqvEc59vSA3L3ePLxRyqFZ11Hk1qpEnVAwneLwpB5Q8eIBf2JQ1cmVC8qWhgWZj3w4OCl3YpbpRqNw/large' },
    { name: 'Ayurveda', imageUrl: 'https://i.pinimg.com/736x/57/c6/eb/57c6eb3bbb608bff626f4913e5c83b31.jpg' },
    { name: 'Vitamins & Supplement', imageUrl: 'https://pngimg.com/uploads/vitamins/vitamins_PNG67.png' },
    { name: 'Healthcare Devices', imageUrl: 'https://png.tree.com/png-vector/20241225/ourmid/pngtree-medical-technology-reshaping-healthcare-and-diagnostics-png-image_14888199.png' },
    { name: 'Diabetes Care', imageUrl: 'https://www.accu-chek.in/sites/g/files/iut376/f/accu-chek_active_meter_image_ccexpress.png' }

    ,
    { name: 'Homoeopathy', imageUrl: 'https://allenhealthcare.co.in/wp-content/uploads/2020/10/Mother-Tincture-400x400.png' },
    { name: 'Healthcare Devices', imageUrl: 'https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-medical-technology-reshaping-healthcare-and-diagnostics-png-image_14888199.png' },

];

const popularDepartment = [
    { name: 'Doctors', icon: 'user-md' },
    { name: 'Video Call', icon: 'video-camera' },
    { name: 'Hospital', icon: 'hospital-o' },
    { name: 'Neurology', icon: 'brain' },
    { name: 'Laboratory', icon: 'flask' },
    { name: 'Blood Test', icon: 'tint' },
    { name: 'Ambulance', icon: 'ambulance' },
    { name: 'Dentist', icon: 'tooth' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Popular Medicine</Text>
   


      <FlatList
        data={popularMedicine}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.medicineCard} onPress={() => navigation.navigate('DrugDetailScreen')}
>
           <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <Text style={styles.medicineName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        numColumns={4}
        contentContainerStyle={styles.departmentList}
      />



      <Text style={styles.sectionTitle}>Popular Department</Text>
      <FlatList
        data={popularDepartment}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.departmentCard}>
            <Icon name={item.icon} size={30} color="#4CAF50" />
            <Text style={styles.departmentText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        numColumns={4}
        contentContainerStyle={styles.departmentList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom:25,
    marginTop:25
  },
  medicineCard: {
    marginRight: 10,
    alignItems: 'center',
  },
  medicineImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  medicineName: {
    fontSize: 14,
    color: '#333',
    fontWeight:600
  },
  departmentList: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  departmentCard: {
    alignItems: 'center',
    width: '22%',
    // backgroundColor: '#e0f7fa',
    paddingVertical: 10,
    marginBottom: 15,
    borderRadius: 19,
    alignSelf: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  departmentText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },  productImage: {
    width: 110,
    height: 120,
    marginRight: 0,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#ddd',
    padding:10
  },
});

export default PopularDepartmentAndMedicine;
