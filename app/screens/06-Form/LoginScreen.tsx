import React from 'react';
import Screen from "../Screen";
import {Image, StyleSheet} from "react-native";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import {Formik} from "formik";
import * as Yup from 'yup';
import ErrorMessage from "../../components/ErrorMessage";
import AppFormField from "../../components/AppFormField";
import SubmitButton from "../../components/SubmitButton";


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

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >

        {() => (
          <>
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
          </>
        )}
      </Formik>

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