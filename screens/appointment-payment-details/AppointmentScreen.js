import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper'; // Importing Card from react-native-paper

const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Payment Method</Text>

      {/* Doctor's Info */}
      <Card style={styles.card}>
        <View style={styles.doctorInfo}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png',
            }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.doctorName}>Dr. Uroos Fatima</Text>
            <Text style={styles.doctorSpecialization}>Psychiatrist • MBBS, PHD</Text>
            <Text style={styles.rating}>4.8 ⭐ (1.3k reviews)</Text>
          </View>
        </View>
      </Card>

      {/* Appointment Details */}
      <Card style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.sectionHeader}>Scheduled Appointment</Text>
          <Text></Text>
        </View>
        <View style={styles.row}>
          <Text>Date:</Text>
          <Text>Feb 12, 2023</Text>
        </View>
        <View style={styles.row}>
          <Text>Time:</Text>
          <Text>14:00 - 14:30 PM</Text>
        </View>
        <View style={styles.row}>
          <Text>Duration:</Text>
          <Text>30 Minutes</Text>
        </View>
      </Card>

      {/* Patient Info */}
      <Card style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.sectionHeader}>Patient Information</Text>
          <Text></Text>
        </View>
        <View style={styles.row}>
          <Text>Name:</Text>
          <Text>Jhalok Deb Robin</Text>
        </View>
        <View style={styles.row}>
          <Text>Gender:</Text>
          <Text>Male</Text>
        </View>
        <View style={styles.row}>
          <Text>Age:</Text>
          <Text>27</Text>
        </View>
      </Card>

      {/* Payment Button */}
      {/* <View style={styles.paymentButton}>
        <Button title="Pay $29" onPress={() => alert('Payment initiated')} />
      </View> */}

            <TouchableOpacity style={styles.continueButton} 
            // onPress={handleContinue}
            >
              <Text style={styles.continueText}>Pay $29</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialization: {
    fontSize: 14,
    color: 'gray',
  },
  rating: {
    fontSize: 14,
    color: '#f39c12',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  paymentButton: {
    marginTop: 20,
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

export default AppointmentScreen;
