import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing icons

const DoctorProfileScreen = ({ navigation, route }) => {
    const { doctor } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedFee, setSelectedFee] = useState('');

  // const handleBookNow = () => {
  //   if (selectedDay && selectedSlot && selectedFee) {
  //     setModalVisible(true);
  //   }
  // };


  const handleContinue = () => {
    if (selectedDay && selectedSlot && selectedFee) {
    navigation.navigate('PatientDetailsScreen'); // Navigate to PatientDetailsScreen
    }else{
          alert('Please select a time slot and consultation fee.');
        }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleDaySelection = (day) => {
    setSelectedDay(day);
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFeeSelection = (fee) => {
    setSelectedFee(fee);
  };


  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <Image source={{ uri: doctor.imageUrl }} style={styles.profileImage} />
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>

        <View style={styles.stats}>
          <Text style={styles.stat}>{doctor.reviews} Reviews</Text>
          <Text style={styles.stat}>{doctor.rating} Rating</Text>
        </View>

        {/* <Text style={styles.aboutText}>{doctor.about}</Text> */}
        <View>
        <Text
          style={styles.aboutText}
          numberOfLines={isExpanded ? undefined : 2} // Show 2 lines by default, expand if toggled
        >
          {doctor.about}
        </Text>
        <TouchableOpacity onPress={handleToggleExpand}>
          <Text style={styles.viewMoreText}>
            {isExpanded ? 'View Less' : 'View More'}
          </Text>
        </TouchableOpacity>
      </View>

        {/* Available Days */}
        <View style={styles.daySelector}>
          <Text style={styles.calendarTitle}>Available Days</Text>
          <ScrollView horizontal>
            {['15', '16', '17', '18', '19'].map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.dayButton,
                  day === selectedDay && styles.selectedDayButton,
                ]}
                onPress={() => handleDaySelection(day)}
              >
                <Text
                  style={[
                    styles.dayText,
                    day === selectedDay && styles.selectedDayText,
                  ]}
                >
                  {day}
                </Text>
                <Text style={styles.dateText}>January 2024</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Available Time Slots */}
        <View style={styles.timeSlotContainer}>
          <Text style={styles.calendarTitle}>Available Slots</Text>
          <View style={styles.timeSlots}>
            {['08:00 am', '08:30 am', '09:00 am', '09:30 am'].map((slot) => (
              <TouchableOpacity
                key={slot}
                style={[
                  styles.timeSlot,
                  slot === selectedSlot && styles.selectedTimeSlot,
                ]}
                onPress={() => handleSlotSelection(slot)}
              >
                <Text
                  style={[
                    styles.slotText,
                    slot === selectedSlot && styles.selectedSlotText,
                  ]}
                >
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Consultation Fees */}
        <View style={styles.feeContainer}>
          <Text style={styles.calendarTitle}>Consultation Fees</Text>
          <View style={styles.fees}>
            {['$5', '$10', '$20'].map((fee) => (
              <TouchableOpacity
                key={fee}
                style={[
                  styles.feeButton,
                  fee === selectedFee && styles.selectedFeeButton,
                ]}
                onPress={() => handleFeeSelection(fee)}
              >
                {/* Icons */}
                <Icon
                  name="comment"
                  size={20}
                  color={fee === selectedFee ? '#fff' : '#000'}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.feeText,
                    fee === selectedFee && styles.selectedFeeText,
                  ]}
                >
                  Messaging {fee}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Book Button */}
      <TouchableOpacity
        style={[styles.bookButton, !(selectedDay && selectedSlot && selectedFee) && { backgroundColor: '#e0e0e0' }]}
        onPress={handleContinue}
        disabled={!(selectedDay && selectedSlot && selectedFee)}
      >
        <Text style={styles.bookButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Booking Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Booked Successfully!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 18,
    color: '#808080',
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  stat: {
    fontSize: 16,
    marginRight: 20,
    color: '#4CAF50',
  },
  aboutText: {
    fontSize: 16,
    color: '#808080',
    textAlign: 'center',
    marginTop: 20,
  },
  daySelector: {
    marginVertical: 20,
    width: '100%',
  },
  dayButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    width: 80,
  },
  selectedDayButton: {
    backgroundColor: '#4CAF50',
  },
  dayText: {
    fontSize: 14,
    color: '#000',
  },
  dateText: {
    fontSize: 12,
    color: '#808080',
  },
  selectedDayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timeSlotContainer: {
    width: '100%',
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
    textAlign: 'center',
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  timeSlot: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    margin: 5,
    borderRadius: 5,
    width: '28%',
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#4CAF50',
  },
  slotText: {
    color: '#000',
    fontSize: 14,
  },
  selectedSlotText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  feeContainer: {
    width: '100%',
    borderRadius: 10,
    borderColor: '#4CAF50', // Dark border color
    borderWidth: 2,
    padding: 10,
    marginTop: 20,
  },
  fees: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  feeButton: {
    padding: 10,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  selectedFeeButton: {
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff', // Light border color for selected fee
  },
  feeText: {
    fontSize: 14,
    color: '#000',
  },
  selectedFeeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    marginBottom: 5,
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center', // This ensures the button is centered horizontally
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },  
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DoctorProfileScreen;
