import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeDetailsScreen from './screens/home-details-page/HomeDetailsScreen'
import SpecialistScreen from './screens/home-details-page/SpecialistScreen';
import DoctorProfileScreen from './screens/home-details-page/DoctorProfileScreen';

import ScheduleScreen from './screens/appointment-payment-details/ScheduleScreen';
import PatientDetailsScreen from './screens/appointment-payment-details/PatientDetailsScreen';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MessagesScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Messages Screen</Text>
    </View>
  );
};

const DocumentsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Documents Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Profile Screen</Text>
    </View>
  );
};
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginBottom: 30,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 20,
          backgroundColor: '#ffffff',
          elevation: 10,
          shadowColor: '#000000',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 2 },
          zIndex: 999,
          position:'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIconStyle: {
          width: 25,
          height: 25,
        },
        tabBarActiveBackgroundColor: '#4CAF50',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeDetailsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
              source={{ uri: 'home-icon-url' }}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={SpecialistScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Image
              source={{ uri: 'message-icon-url' }}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Documents"
        component={ScheduleScreen}
        options={{
          tabBarLabel: 'Documents',
          tabBarIcon: ({ color }) => (
            <Image
              source={{ uri: 'document-icon-url' }}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image
              source={{ uri: 'profile-icon-url' }}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="Specialist">
        <Stack.Screen name="Specialist" component={MyTabs} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
        <Stack.Screen name="PatientDetailsScreen" component={PatientDetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    elevation: 3,
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
  footerIcon: {
    alignItems: 'center',
  },
});
