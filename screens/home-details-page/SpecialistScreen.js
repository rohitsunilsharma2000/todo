import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const SpecialistScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const doctors = 
  [
    {
      name: "Dr. Uroos Fatima",
      specialization: "Psychiatrist",
      rating: 4.8,
      reviews: "1.3k",
      category: "Psychiatrist",
      imageUrl: "https://img.freepik.com/free-photo/candid-male-doctor-holding-stethoscope_329181-621.jpg?t=st=1737546606~exp=1737550206~hmac=b1dafd02ec3532a910205d6e55a4ff39841f3f6a0c4255be5c6691517f460d07&w=996",
      about: "Dr. Uroos Fatima is a top Psychiatrist with over 10 years of experience. She has treated over 1000 patients and holds an MBBS and PhD in Psychiatry from top institutions. She specializes in managing mental health disorders and provides personalized care."
    },
    {
      name: "Dr. Sarah Johnson",
      specialization: "Pediatrics",
      rating: 4.8,
      reviews: "1.3k",
      category: "Pediatrics",
      imageUrl: "https://img.freepik.com/free-photo/young-medical-student_144627-9949.jpg?semt=ais_incoming",
      about: "Dr. Sarah Johnson is a Pediatrician with extensive experience in child healthcare. She has completed her MBBS from a leading medical university and specializes in treating childhood diseases, preventive healthcare, and vaccinations."
    },
    {
      name: "Dr. David Brown",
      specialization: "Oncology",
      rating: 4.8,
      reviews: "1.3k",
      category: "Oncology",
      imageUrl: "https://img.freepik.com/free-photo/doctor-white-background_1368-5901.jpg?semt=ais_incoming",
      about: "Dr. David Brown is a leading Oncologist with over 15 years of experience in cancer treatment. He holds a degree in Medicine and Surgery (MBBS) and a PhD in Oncology. He is renowned for his expertise in early cancer detection and personalized treatment plans."
    },
    {
      name: "Dr. Emily Taylor",
      specialization: "Psychiatrist",
      rating: 4.8,
      reviews: "1.3k",
      category: "Psychiatrist",
      imageUrl: "https://img.freepik.com/free-photo/forget-about-your-vitamin-pills_329181-326.jpg?semt=ais_incoming",
      about: "Dr. Emily Taylor is a seasoned Psychiatrist who specializes in anxiety, depression, and trauma care. She has a strong academic background with an MBBS and PhD in Psychiatry. Dr. Taylor uses a holistic approach to help patients recover and manage their mental health."
    },
    {
      name: "Dr. Michael Wilson",
      specialization: "Neurology",
      rating: 4.8,
      reviews: "1.3k",
      category: "Neurology",
      imageUrl: "https://img.freepik.com/free-photo/young-medical-student_144627-9944.jpg?semt=ais_incoming",
      about: "Dr. Michael Wilson is a highly regarded Neurologist with a specialization in brain and nervous system disorders. He holds an MBBS and a PhD in Neurology. His research focuses on neurodegenerative diseases and his clinic provides state-of-the-art neurological care."
    }
  ];  

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (selectedCategory === '' || doctor.category === selectedCategory) &&
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Specialist</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#8e8e8e"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.doctorList}>
        {filteredDoctors.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            style={styles.doctorItem}
            onPress={() => navigation.navigate('DoctorProfile', { doctor })}
          >
            <Image source={{ uri: doctor.imageUrl }} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialization}>
                {doctor.specialization} | MBBS, PhD
              </Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>★ {doctor.rating}</Text>
                <Text style={styles.reviews}>({doctor.reviews})</Text>
              </View>
            </View>
          </TouchableOpacity >
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#4CAF50',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  doctorList: {
    paddingHorizontal: 0,
  },
  doctorItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
  },
  doctorImage: {
    width: 110,
    height: 80,
    // borderRadius: 40,
    marginRight: 15,
    padding:10,
    
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  doctorSpecialization: {
    fontSize: 14,
    color: '#808080',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700', // Gold color for stars
    marginRight: 5,
  },
  reviews: {
    fontSize: 14,
    color: '#808080',
  },
});

export default SpecialistScreen;
