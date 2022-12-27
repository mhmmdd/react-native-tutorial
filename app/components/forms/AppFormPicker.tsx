import React from 'react';
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";
import {Picker} from "@react-native-picker/picker";
import {View} from "react-native";

function AppFormPicker({items, name, placeholder, width = "100%"}) {
  const {setFieldValue, errors, values, touched} = useFormikContext()
  return (
    <>
      <View style={{width}}>
        <Picker
          onValueChange={(item) => setFieldValue(name, item)}
          width={width}
          placeholder={placeholder}
          selectedValue={values[name] === null ? items[0].value : values[name]}
        >
          {Object.keys(items).map((key) => {
            return (<Picker.Item label={items[key].label}
                                 value={items[key].value}
                                 key={key}/>) //if you have a bunch of keys value pair
          })}
        </Picker>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}

export default AppFormPicker;