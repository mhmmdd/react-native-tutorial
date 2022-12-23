import React, {useState} from 'react';
import Screen from "../../components/Screen";
import {StyleSheet, Switch, Text, TextInput} from "react-native";
import AppTextInput from "../../components/AppTextInput";
import {Picker} from "@react-native-picker/picker";

function InputScreen() {
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

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


      <Text>Switch: {isNew.toString()}</Text>
      <Switch
        value={isNew}
        onValueChange={value => setIsNew(value)}/>

      <Text>Picker: {selectedLanguage}</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java"/>
        <Picker.Item label="JavaScript" value="js"/>
      </Picker>
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