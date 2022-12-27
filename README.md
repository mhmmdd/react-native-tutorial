# Basic
## 01 - Changes
1. SafeAreaView: It is working only IOS
2. Text: numberOfLines, onPress
3. Image: local and network image
4. TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight
5. Button: Customized alert
6. Platform specific style: Platform.OS === "android" ? StatusBar.currentHeight : 0,

## 02 - Changes
1. Navigation is added

## 03 - Changes
1. FlatList
2. expo-constants
3. TouchableHighlight: with custom underlay color

## 04 - Changes
### 1. Gesture
1. [GestureHandler](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)
2. https://docs.swmansion.com/react-native-gesture-handler/
3. [Swipeable](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable)
```shell
npx expo install react-native-gesture-handler
```
### 2. Pull to Refresh
### 3. Account screen
### 4. Listing screen

## 05 - Input
### 1. Text Input
### 2. Customized, App Text Input
### 3. Switch, Picker

## 06 - Form
### 1. Login Form
### 2. Formik and Yup
````shell
$ npm install formik --save
$ npm install yup --save

For web development
````shell
$ npx expo install @expo/webpack-config@^0.17.2
$ npm run web
````
### 3. Error Component
### 4. Formik Touched state
### 5. Field Component with Formik useFormikContext
### 6. Creating Form Component and organizing all form components
### 7. Listing Edit Screen
````shell
$ expo start --tunnel
$ expo doctor --fix-dependencies
````

# Advanced
## 07 - Image Picker
### 1. useEffect to get the permission
````shell
$ npx expo install expo-image-picker
````
### 2. Image Input, Image Input List, ScrollView