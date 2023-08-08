import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import ProfileScreen from "./app/screens/01-fundamental/profile";
import FundamentalScreen01 from "./app/screens/01-fundamental/FundamentalScreen";
import LayoutScreen02 from "./app/screens/02-Layout/LayoutScreen";
import FlexboxScreen03 from "./app/screens/02-Layout/FlexboxScreen";
import ListScreen04 from "./app/screens/03-List/ListScreen";
import AccountScreen from "./app/screens/04-Account/AccountScreen";
import ListingsScreen from "./app/components/ListingsScreen";
import InputScreen from "./app/screens/05-Input/InputScreen";
import LoginScreen from "./app/screens/06-Form/LoginScreen";
import ListingEditScreen from "./app/screens/06-Form/ListingEditScreen";
import NewListingEditScreen from "./app/screens/07-ImagePicker/ListingEditScreen";
import ImagePickerScreen from "./app/screens/07-ImagePicker/ImagePickerScreen";
import { ImageSaveScreen } from "./app/screens/08-ImageSave/ImageSaveScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="01Fundamental" component={FundamentalScreen01} />
        <Stack.Screen name="02Layout" component={LayoutScreen02} />
        <Stack.Screen name="03Flexbox" component={FlexboxScreen03} />
        <Stack.Screen name="04List" component={ListScreen04} />
        <Stack.Screen name="05Account" component={AccountScreen} />
        <Stack.Screen name="06Listing" component={ListingsScreen} />
        <Stack.Screen name="07Input" component={InputScreen} />
        <Stack.Screen name="08Login" component={LoginScreen} />
        <Stack.Screen name="09ListingEdit" component={ListingEditScreen} />
        <Stack.Screen name="10ImagePicker" component={ImagePickerScreen} />
        <Stack.Screen name="11ListingEdit" component={NewListingEditScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="12ImageSave" component={ImageSaveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
