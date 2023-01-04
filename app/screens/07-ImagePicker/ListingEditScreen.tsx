import React, {useEffect, useState} from 'react';
import Screen from "../../components/Screen";
import {StyleSheet} from "react-native";
import * as Yup from 'yup';
import {AppForm, AppFormField as FormField, AppFormPicker as Picker, SubmitButton} from "../../components/forms";
import FormImagePicker from "../../components/forms/FormImagePicker";
import * as Location from 'expo-location';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.number().required("Please select your category").label("Category"),
  images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
  { id: 1, label: "Male", value: 1 },
  { id: 2, label: "Female", value: 2 },
  { id: 3, label: "Other", value: 3 },
];

function ListingEditScreen() {
  const [location, setLocation] = useState();

  useEffect(() => {
    getForegroundLocation ();
  }, []);

  const getForegroundLocation = async () => {
    try {
      const {granted} = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: {latitude, longitude},
      } = await Location.getLastKnownPositionAsync();
      setLocation({latitude, longitude});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: "",
          images: []
        }}
        onSubmit={values => console.log(location)}
        validationSchema={validationSchema}>

        <FormImagePicker name="images"/>

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

export default ListingEditScreen;