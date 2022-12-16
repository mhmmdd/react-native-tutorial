import {Platform, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {useDeviceOrientation, useDimensions} from "@react-native-community/hooks";

export default function LayoutScreen02() {

  console.log(useDimensions());
  console.log(useDeviceOrientation());

  const {landscape} = useDeviceOrientation();

  return (
    // SafeAreaView is working only IOS
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: landscape ? '100%' : '30%'
      }}>

      </View>
    </SafeAreaView>
  );
}

// Validates and optimizes the style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});