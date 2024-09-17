import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import Checkbox from 'expo-checkbox'; // Use expo-checkbox if using Expo

const App = () => {
  const [length, setLength] = useState(8);
  const [includeLower, setIncludeLower] = useState(false);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    console.log("Generate Password button pressed"); // Debug line
    if (length <= 0) {
      Alert.alert('Error', 'Password length must be a positive number');
      return;
    }

    let charset = '';
    if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeSpecial) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    if (charset.length === 0) {
      Alert.alert('Error', 'At least one character set must be selected');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <Text>Password length</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(length)}
        onChangeText={(text) => {
          // Remove non-numeric characters and handle empty input
          const numericValue = parseInt(text.replace(/[^0-9]/g, ''), 10);
          if (!isNaN(numericValue) && numericValue > 0) {
            setLength(numericValue);
          } else if (text === '') {
            setLength(0);
          }
        }}
      />
      <View style={styles.checkboxContainerA}>
          <View style={styles.checkboxContainer}>
            <Text>Include lower case letters</Text>
            <Checkbox value={includeLower} onValueChange={setIncludeLower}  style={styles.checkbox}/>
          </View>
          <View style={styles.checkboxContainer}>
            <Text>Include uppercase letters</Text>
            <Checkbox value={includeUpper} onValueChange={setIncludeUpper}  style={styles.checkbox} />
          </View>
          <View style={styles.checkboxContainer}>
            <Text>Include special symbols</Text>
            <Checkbox value={includeSpecial} onValueChange={setIncludeSpecial}  style={styles.checkbox} />
          </View>
      </View>
      <Button title="GENERATE PASSWORD" onPress={generatePassword} />
      {password ? <Text style={styles.password}>{password}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    padding: 20,
    backgroundColor: '#6256CA'
  },
  checkboxContainerA:{
      height:200,
      alignItems:'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#CBB0E0',

    padding: 10,
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding:15,

  },
  password: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  checkbox: {
   marginLeft:10
  },
});

export default App;
