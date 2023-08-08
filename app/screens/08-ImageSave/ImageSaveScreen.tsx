import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Alert,
  Platform,
  Text,
  Button,
} from "react-native";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
// import {Button} from "react-native-ui-lib";
import { PERMISSIONS, request } from "react-native-permissions";

export const ImageSaveScreen = () => {
  const yourBase64String =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";
  const base64Image = "data:image/jpeg;base64," + yourBase64String;

  const requestPermissionAndSave = async () => {
    try {
      const platform = Platform.OS;
      const permission =
        platform === "ios"
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;

      const result = await request(permission);

      if (result === "granted") {
        await CameraRoll.save(base64Image, {
          type: "photo",
          album: "MyAppPhotos",
        });
        Alert.alert("Success", "Photo saved successfully!");
      } else {
        Alert.alert(
          "Permission Denied!",
          "Cannot save photo without permission."
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to save photo.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Image source={{ uri: base64Image }} style={styles.image} />
      <Button title="Save to Photos" onPress={requestPermissionAndSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
