import React from 'react';
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";
import {Picker} from "@react-native-picker/picker";
import {View} from "react-native";

function AppFormPicker({items, name, placeholder, width = "100%"}) {
  const {values, setFieldValue, errors, touched} = useFormikContext()

  return (
    <>
      <View style={{width}}>
        <Picker
          onValueChange={value => setFieldValue(name, value)}
          width={width}
          placeholder={placeholder}
          selectedValue={values[name]}
        >
          <Picker.Item key='' label='-- Select a Item --' value={""}/>
          {items?.map(item => (
            <Picker.Item key={item.id.toString()} label={item.label} value={item.value}/>
          ))}
        </Picker>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}

export default AppFormPicker;