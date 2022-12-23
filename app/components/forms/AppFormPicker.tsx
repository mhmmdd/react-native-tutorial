import React from 'react';
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";
import {Picker} from "@react-native-picker/picker";

function AppFormPicker({items, name, placeholder}) {
  const {setFieldValue, errors, values, touched} = useFormikContext()
  return (
    <>
      <Picker
        onValueChange={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedValue={values[name] === null ? items[0].value : values[name]}
      >
        {Object.keys(items).map((key) => {
          return (<Picker.Item label={items[key].label}
                               value={items[key].value}
                               key={key}/>) //if you have a bunch of keys value pair
        })}
      </Picker>
      <ErrorMessage error={errors[name]} visible={touched.email}/>
    </>
  );
}

export default AppFormPicker;