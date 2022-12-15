import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/01-fundamental/profile";
import FundamentalScreen01 from "./screens/01-fundamental/FundamentalScreen";
import LayoutScreen02 from "./screens/02-Layout/LayoutScreen";
import FlexboxScreen03 from "./screens/02-Layout/FlexboxScreen";
import ListScreen04 from "./screens/03-List/ListScreen";

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
        <Stack.Screen name="02Layout" component={LayoutScreen02}/>
        <Stack.Screen name="03Flexbox" component={FlexboxScreen03}/>
        <Stack.Screen name="04List" component={ListScreen04}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
