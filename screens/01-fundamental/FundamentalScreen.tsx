import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

export default function FundamentalScreen01() {
  const handlePress = () => console.log("Text pressed");

  console.log(require('../../assets/icon.png'));

  return (
    // SafeAreaView is working only IOS
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Open up App.tsx to start working on your app! - A really really long text.
        Now I wanna make this even
        longer and see what happens!</Text>

      {/*Local Image*/}
      {/*<Image source={require('./assets/icon.png')}/>*/}

      {/*TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight*/}
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        {/*Network Image*/}
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}/>
      </TouchableHighlight>

      <Button title={"Click Me"} onPress={() => alert("Button tapped")}/>

      <Button title={"Customized Alert"}
              onPress={() =>
                Alert.alert('My title', 'My message', [
                  {text: "Btn1", onPress: () => console.log('Btn1 tapped')},
                  {text: "Btn2", onPress: () => console.log('Btn2 tapped')},
                  {text: "Btn3", onPress: () => console.log('Btn3 tapped')},
                ])}/>

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