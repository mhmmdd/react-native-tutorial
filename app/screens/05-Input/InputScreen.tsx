import React, {useState} from 'react';
import Screen from "../Screen";
import {StyleSheet, Text, TextInput} from "react-native";

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