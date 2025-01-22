// BudgetScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BudgetScreen({ navigation }) {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');

  const handleSetBudget = async () => {
    if (!category || !budget) {
      alert('Please fill in all fields');
      return;
    }

    const newBudget = {
      category,
      budget: parseFloat(budget),
    };

    try {
      const storedBudgets = await AsyncStorage.getItem('budgets');
      const budgets = storedBudgets ? JSON.parse(storedBudgets) : [];
      budgets.push(newBudget);
      await AsyncStorage.setItem('budgets', JSON.stringify(budgets));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Budget</Text>

      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Budget Amount"
        keyboardType="numeric"
        value={budget}
        onChangeText={setBudget}
      />

      <TouchableOpacity style={styles.button} onPress={handleSetBudget}>
        <Text style={styles.buttonText}>Save Budget</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f7fc',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#5cb85c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
