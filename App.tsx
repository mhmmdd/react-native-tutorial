import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/01-fundamental/profile";
import FundamentalScreen01 from "./screens/01-fundamental/fundamental";
import LayoutScreen02 from "./screens/02-Layout/layout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="01Fundamental" component={FundamentalScreen01}/>
        {/*<Stack.Screen name="02Layout" component={LayoutScreen02}/>*/}
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
