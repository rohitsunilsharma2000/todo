import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing icons

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeDetailsScreen from './screens/home-details-page/HomeDetailsScreen'
import SpecialistScreen from './screens/home-details-page/SpecialistScreen';
import DoctorProfileScreen from './screens/home-details-page/DoctorProfileScreen';

import ScheduleScreen from './screens/appointment-payment-details/ScheduleScreen';
import PatientDetailsScreen from './screens/appointment-payment-details/PatientDetailsScreen';
import PaymentMethodScreen from './screens/appointment-payment-details/PaymentMethodScreen';
import AppointmentScreen from './screens/appointment-payment-details/AppointmentScreen';

import DrugDetailScreen from './screens/medicine-pill-reminder/DrugDetailScreen';
import CartScreen from './screens/medicine-pill-reminder/CartScreen';
import AddPillScreen from './screens/medicine-pill-reminder/AddPillScreen';


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
      // headerShown: false, // Hides headers for Tab screens
      tabBarStyle: {
        backgroundColor: '#ffffff',
        elevation: 30,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 10, height: 2 },
        height: 70, // Increased height for tab bar
        borderRadius: 20, // Rounded corners for the tab bar
        paddingTop: 5,
        borderTopWidth: 0, // Remove top border if any
      },
      tabBarLabelStyle: {
        fontSize: 14,
      },
      tabBarIconStyle: {
        width: 30, // Increased size for better visibility
        height: 30, // Increased size for better visibility
      },
      // tabBarActiveBackgroundColor: '#4CAF50', // Active background color
      tabBarActiveTintColor: '#fff', // Active icon color
      tabBarInactiveTintColor: 'gray', // Inactive icon color
      
    }}
  >
      <Tab.Screen
        name="Home"
        component={HomeDetailsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeTab, // Apply rounded corners on active tab
              ]}
            >
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png' }}
              style={{ width: 25, height: 25, tintColor: color }}
            />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={SpecialistScreen}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeTab, // Apply rounded corners on active tab
              ]}
            >
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1370/1370907.png' }}
              style={{ width: 25, height: 25, tintColor: color }}
            />
            </View>
          ),
        }}
         
      />
      <Tab.Screen
        name="Documents"
        component={ScheduleScreen}
        options={{
          tabBarLabel: '',
       
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeTab, // Apply rounded corners on active tab
              ]}
            >
            <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12672/12672815.png' }}
            style={{ width: 25, height: 25, tintColor: color }}
            />
            </View>
          ),
    
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
       
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeTab, // Apply rounded corners on active tab
              ]}
            >
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2785/2785482.png' }}
              style={{ width: 25, height: 25, tintColor: color }}
            />
            </View>
          ),
    
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="Specialist" 
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Specialist" component={MyTabs}   options={{ headerShown: false }} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen}          
        //  options={{ headerShown: false }} 
          />
        <Stack.Screen name="PatientDetailsScreen" component={PatientDetailsScreen}           
        //  options={{ headerShown: false }}
          />
        <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen}       
          //  options={{ headerShown: false }} 
            />
        <Stack.Screen name="AppointmentScreen" component={AppointmentScreen}          
        //  options={{ headerShown: false }}
          />
        <Stack.Screen name="DrugDetailScreen" component={DrugDetailScreen}        
          //  options={{ headerShown: false }}
            />
    <Stack.Screen name="CartScreen" component={CartScreen}        
            />
                    <Stack.Screen name="AddPillScreen" component={AddPillScreen}        
          //  options={{ headerShown: false }}
            />
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
  }, iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderRadius: 15, // default rounded corners for the icons
  },
  activeTab: {
    backgroundColor: '#4CAF50', // Background color for active tab
    borderRadius: 15, // Apply rounded corners on the active tab background
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
