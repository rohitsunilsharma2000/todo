import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Log in to access your personalized Medinest experience</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address..."
          placeholderTextColor="#8e8e8e"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password..."
            secureTextEntry
            placeholderTextColor="#8e8e8e"
          />
          <TouchableOpacity style={styles.eyeIcon}>
            <Image source={{ uri: 'eye-icon-url' }} style={styles.iconImage} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        

              {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Expense')}>
                <Text style={styles.buttonText}>Add Expense</Text>
              </TouchableOpacity> */}
      </View>

      <View style={styles.socialLogin}>
        <Text style={styles.orText}>or</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.icon}><Image source={{ uri: 'facebook-icon-url' }} style={styles.iconImage} /></TouchableOpacity>
          <TouchableOpacity style={styles.icon}><Image source={{ uri: 'google-icon-url' }} style={styles.iconImage} /></TouchableOpacity>
          <TouchableOpacity style={styles.icon}><Image source={{ uri: 'instagram-icon-url' }} style={styles.iconImage} /></TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don’t have an account? <Text style={styles.link}>Sign Up</Text></Text>
        <Text style={styles.footerText}><Text style={styles.link}>Forgot your password?</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#F6F6F6',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    textAlign: 'center',
    marginTop: 10,
  },
  form: {
    width: '90%',
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLogin: {
    alignItems: 'center',
    marginBottom: 30,
  },
  orText: {
    fontSize: 16,
    color: '#808080',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  iconImage: {
    width: 35,
    height: 35,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#808080',
  },
  link: {
    color: '#4CAF50',
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
