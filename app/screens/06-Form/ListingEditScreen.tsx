import React from 'react';
import Screen from "../../components/Screen";
import {StyleSheet} from "react-native";
import * as Yup from 'yup';
import {AppForm, AppFormField as FormField, AppFormPicker as Picker, SubmitButton} from "../../components/forms";


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {label: "Furniture", value: 3},
  {label: "Clothing", value: 2},
  {label: "Camera", value: 3},
];

function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>

        <FormField
          maxLength={255}
          placeholder="Title"
          name="title"/>

        <FormField
          keyboardType="numeric"
          maxLength={8}
          width={120}
          name="price"
          placeholder="Price"/>

        <Picker
          items={categories}
          width="50%"
          name="category"
          placeholder="Category"/>

        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOflines={3}
          placeholder="Description"/>

        <SubmitButton title="Post"/>
      </AppForm>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
});

export default LoginScreen;