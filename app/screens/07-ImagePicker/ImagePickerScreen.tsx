import React, {useEffect, useState} from 'react';
import {Button, Image, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerScreen() {
  const [imageUri, setImageUri] = useState(null);

  // useEffect(() => {}) // runs every time when component is rendered
  // useEffect(() => {}, []) // get executed only once
  useEffect(() => {
    requestPermission();
  }, []);


  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library');
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled) {
        setImageUri(result.assets[0].uri)
      }
    } catch (e) {
      console.log("Error reading an image", e)
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title={"Select Image"} onPress={selectImage}/>
      <Image source={{uri: imageUri}} style={{width: 200, height: 200}}/>
    </View>
  );
}