import React, {useState} from 'react';
import Screen from "../Screen";
import {Image, StyleSheet} from "react-native";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={{
        uri: "https://i.picsum.photos/id/368/200/200.jpg?hmac=ej5Lmr5qh7f88zx85PnlHj2GKfwrNNWf6-lACRJ34qI"
      }}/>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        textContentType="emailAddress" // only IOS
        placeholder="Email"/>

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        secureTextEntry // secureTextEntry={true}
        textContentType="password" // only IOS
        onChangeText={text => setPassword(text)}
        placeholder="Password"/>
      <AppButton title="Login" onPress={() => console.log(email, password)}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
});

export default LoginScreen;