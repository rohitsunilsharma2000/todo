import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ScheduleScreen = () => {
  const [selectedConsultationType, setSelectedConsultationType] = useState('Online');
  const [selectedDay, setSelectedDay] = useState('16');
  const [selectedPeriod, setSelectedPeriod] = useState('Afternoon');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedFee, setSelectedFee] = useState(null);


  const timeSlots = {
    Morning: ['08:00 am', '08:30 am', '09:00 am', '09:30 am'],
    Afternoon: ['10:00 am', '10:30 am', '11:00 am', '11:30 am'],
    Night: ['08:00 pm', '09:00 pm', '09:30 pm'],
  };

  const consultationFees = [
    { type: 'Messaging', price: '$5' },
    { type: 'Voice Call', price: '$10' },
    { type: 'Video Call', price: '$20' },
  ];

  const handleContinue = () => {
    if (selectedTimeSlot && selectedFee) {
      alert('Booking confirmed!');
    } else {
      alert('Please select a time slot and consultation fee.');
    }
  };




  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Consultation Type Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedConsultationType === 'Hospital' && styles.selectedTab,
          ]}
          onPress={() => setSelectedConsultationType('Hospital')}
        >
          <Text style={styles.tabText}>Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedConsultationType === 'Online' && styles.selectedTab,
          ]}
          onPress={() => setSelectedConsultationType('Online')}
        >
          <Text style={styles.tabText}>Online</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar / Day Selector */}
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>January 2024</Text>
        <View style={styles.calendar}>
          {[...Array(7).keys()].map((i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.dayButton,
                selectedDay === `${i + 16}` && styles.selectedDayButton,
              ]}
              onPress={() => setSelectedDay(`${i + 16}`)}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDay === `${i + 16}` && styles.selectedDayText,
                ]}
              >
                {i + 16}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Available Slots */}
      <View style={styles.timeSlotContainer}>
        <Text style={styles.title}>Available Slots</Text>
        {['Morning', 'Afternoon', 'Night'].map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.periodButton,
              selectedPeriod === period && styles.selectedPeriodButton,
            ]}
            onPress={() => {
              setSelectedPeriod(period);
              setSelectedTimeSlot(timeSlots[period][0]);
            }}
          >
            <Text style={styles.periodText}>{period}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Time Slot Choices */}
      {selectedPeriod && (
        <View style={styles.slotChoices}>
          {timeSlots[selectedPeriod].map((slot) => (
            <TouchableOpacity
              key={slot}
              style={[
                styles.slotButton,
                selectedTimeSlot === slot && styles.selectedSlotButton,
              ]}
              onPress={() => setSelectedTimeSlot(slot)}
            >
              <Text style={styles.slotText}>{slot}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Consultation Fees */}
      <View style={styles.feesContainer}>
        <Text style={styles.title}>Consultation Fees</Text>
        {consultationFees.map((fee) => (
          <TouchableOpacity
            key={fee.type}
            style={[
              styles.feeButton,
              selectedFee === fee.type && styles.selectedFeeButton,
            ]}
            onPress={() => setSelectedFee(fee.type)}
          >
            <Text style={styles.feeText}>
              {fee.type} - {fee.price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F6F6F6',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedTab: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  calendarContainer: {
    marginBottom: 20,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    width: '13%',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedDayButton: {
    backgroundColor: '#4CAF50',
  },
  dayText: {
    fontSize: 14,
    color: '#000',
  },
  selectedDayText: {
    color: '#fff',
  },
  timeSlotContainer: {
    marginBottom: 20,
  },
  periodButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedPeriodButton: {
    backgroundColor: '#4CAF50',
  },
  periodText: {
    fontSize: 16,
    color: '#000',
  },
  slotChoices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  slotButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: '28%',
    alignItems: 'center',
  },
  selectedSlotButton: {
    backgroundColor: '#4CAF50',
  },
  slotText: {
    fontSize: 14,
    color: '#000',
  },
  feesContainer: {
    marginBottom: 20,
  },
  feeButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedFeeButton: {
    backgroundColor: '#4CAF50',
  },
  feeText: {
    fontSize: 16,
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ScheduleScreen;
