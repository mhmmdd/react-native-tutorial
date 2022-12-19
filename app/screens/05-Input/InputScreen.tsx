import React, {useState} from 'react';
import Screen from "../Screen";
import {StyleSheet, Text, TextInput} from "react-native";
import AppTextInput from "../../components/AppTextInput";

function InputScreen() {
  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        // secureTextEntry={true} // password
        // clearButtonMode="always" // IOS only
        // keyboardType="numeric"
        onChangeText={text => setFirstName(text)}
        placeholder="First Name"
        style={styles.firstName}
      />

      <Text>Customized Input</Text>
      <AppTextInput
        icon="email"
        placeholder="Username"
        onChangeText={text => setFirstName(text)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  firstName: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});

export default InputScreen;