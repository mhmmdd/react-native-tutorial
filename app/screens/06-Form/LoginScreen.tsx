import React from 'react';
import Screen from "../../components/Screen";
import {Image, StyleSheet} from "react-native";
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from "../../components/forms";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={{
        uri: "https://i.picsum.photos/id/368/200/200.jpg?hmac=ej5Lmr5qh7f88zx85PnlHj2GKfwrNNWf6-lACRJ34qI"
      }}/>

      <AppForm
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress" // only IOS
          placeholder="Email"/>

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry // secureTextEntry={true}
          textContentType="password" // only IOS
          placeholder="Password"/>

        <SubmitButton title="Login"/>
      </AppForm>

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