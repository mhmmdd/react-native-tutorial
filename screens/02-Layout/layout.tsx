import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

export default function LayoutScreen02() {

  return (
    // SafeAreaView is working only IOS
    <SafeAreaView style={styles.container}>

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