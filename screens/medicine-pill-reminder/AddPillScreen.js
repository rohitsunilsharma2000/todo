import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper'; // Import for icons
// import DatePicker from 'react-native-datepicker'; // You can install this for date selection
import { ScrollView } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';

const AddPillScreen = ({ navigation }) => {
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState(4); // Initial value for the slider
  const [category, setCategory] = useState('Antidiuretics');
  const [startDate, setStartDate] = useState('2025-07-05'); // Initial date

  const categories = [
    'Antibiotics',
    'Pain Relievers',
    'Antacids',
    'Antidepressant',
    'Antidiuretics',
    'Diuretics',
    'Analgesics'
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Medicine Name */}
      <Text style={styles.label}>Medicine Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Medicine Name"
        value={medicineName}
        onChangeText={setMedicineName}
      />

      {/* Dosage & Frequency */}
      <Text style={styles.label}>Dosage & Frequency</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={dosage}
          onValueChange={(value) => setDosage(value)}
        />
        <Text style={styles.sliderValue}>{dosage}</Text>
      </View>

      {/* Category */}
      <Text style={styles.label}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.categoryButton, category === item && styles.selectedCategory]}
            onPress={() => setCategory(item)}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* From Date */}
      <Text style={styles.label}>From</Text>
      {/* <DatePicker
        style={styles.datePicker}
        date={startDate}
        mode="date"
        placeholder="Select Start Date"
        format="YYYY-MM-DD"
        onDateChange={setStartDate}
      /> */}

      {/* Add Medicine Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => alert('Medicine Added')}>
        <Text style={styles.addButtonText}>Add Medicine</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="home" size={30} style={styles.navIcon} />
        <Icon name="message" size={30} style={styles.navIcon} />
        <Icon name="account" size={30} style={styles.navIcon} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
  },
  sliderContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  slider: {
    width: '80%',
  },
  sliderValue: {
    marginTop: 10,
    fontSize: 18,
    color: '#4CAF50',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#F1F1F1',
    padding: 8,
    borderRadius: 20,
    margin: 5,
  },
  selectedCategory: {
    backgroundColor: '#4CAF50',
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
  },
  datePicker: {
    width: '80%',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navIcon: {
    color: '#333',
  },
});

export default AddPillScreen;
