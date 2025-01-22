import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import
import DateTimePicker from '@react-native-community/datetimepicker'; // Importing DateTimePicker

const PatientDetailsScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [problem, setProblem] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


   // Initialize the selectedGender and selectedDate state
   const [selectedGender, setSelectedGender] = useState(null);
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    if (!fullName || !selectedDate || !selectedGender || !problem) {
      alert(fullName)
      alert(selectedDate)
      alert(gender)
      alert(problem)

      setErrorMessage('Please fill in all the fields');
    } else {
      setErrorMessage('');
      navigation.navigate('PaymentMethodScreen'); // Replace 'NextScreen' with your next screen
    }
  };


  const handleDateChange = (event, date) => {
    const selectedDate = date || selectedDate;  // If no date is selected, keep the previous value
    setShowDatePicker(false);
    setSelectedDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Details</Text>

      {/* Full Name */}
      <Text style={styles.label}>Full name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Age */}
      {/* <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      /> */}

<Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateButtonText}>{selectedDate.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {/* Date Picker Modal */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      


      {/* Gender */}
      <Text style={styles.label}>Gender</Text>
      <Picker
        selectedValue={selectedGender}
        onValueChange={(itemValue) => setSelectedGender(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      {/* Problem */}
      <Text style={styles.label}>Write your problem</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Describe your problem"
        multiline
        numberOfLines={4}
        value={problem}
        onChangeText={setProblem}
      />

      {/* Error Message */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  textarea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    fontSize: 14,
  },
});

export default PatientDetailsScreen;
