import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: null,
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
