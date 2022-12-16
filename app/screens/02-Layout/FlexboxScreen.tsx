import {Platform, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {useDeviceOrientation, useDimensions} from "@react-native-community/hooks";

export default function FlexboxScreen03() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row", // main, horizontal default: column
      justifyContent: "center", // secondary
      alignItems: "center"
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        // flex: 3
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "gold",
        // flex: 1
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "tomato",
        // flex: 1
        width: 100,
        height: 100,
      }} />
    </View>
  );
}
