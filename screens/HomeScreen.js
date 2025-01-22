import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);

  // Fetch expenses and budgets from AsyncStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedExpenses = await AsyncStorage.getItem('expenses');
        const savedBudgets = await AsyncStorage.getItem('budgets');
        if (savedExpenses) {
          setExpenses(JSON.parse(savedExpenses));
        }
        if (savedBudgets) {
          setBudgets(JSON.parse(savedBudgets));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Calculate total expenses for each category
  const calculateCategoryExpense = (category) => {
    return expenses
      .filter((expense) => expense.category === category)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  // Check if user has exceeded their budget for any category
  const checkBudgetExceedance = (category, totalExpense) => {
    const budget = budgets.find((b) => b.category === category);
    return budget && totalExpense > budget.budget;
  };

  // Calculate total expenses
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>
      <Text style={styles.totalExpense}>Total Expense: ${totalExpense}</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Expense')}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Set Budget')}>
        <Text style={styles.buttonText}>Set Budget</Text>
      </TouchableOpacity>

      <FlatList
        data={expenses}
        renderItem={({ item }) => {
          const totalCategoryExpense = calculateCategoryExpense(item.category);
          const isExceeded = checkBudgetExceedance(item.category, totalCategoryExpense);
          return (
            <View style={[styles.expenseCard, isExceeded && styles.expenseExceeded]}>
              <Text style={styles.expenseCategory}>{item.category}</Text>
              <Text style={styles.expenseAmount}>${item.amount}</Text>
              <Text style={styles.expenseDate}>{item.date}</Text>
              {isExceeded && <Text style={styles.warning}>Budget Exceeded!</Text>}
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
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
  totalExpense: {
    fontSize: 20,
    color: '#ff6347',
    fontWeight: '600',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5cb85c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 15,
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
  expenseCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  expenseExceeded: {
    backgroundColor: '#ffdddd',
  },
  expenseCategory: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  expenseAmount: {
    fontSize: 16,
    color: '#666',
  },
  expenseDate: {
    fontSize: 14,
    color: '#aaa',
  },
  warning: {
    color: 'red',
    fontSize: 12,
    marginTop: 10,
  },
});
