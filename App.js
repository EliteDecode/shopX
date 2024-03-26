// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useFonts } from "expo-font";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Colors from "./helpers/Colors";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    calistoga: require("./assets/fonts/Calistoga-Regular.ttf"),
    sen: require("./assets/fonts/Sen-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    // Font is still loading, return loading indicator or splash screen
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false, headerStatusBarHeight: 0 }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerStyle: {
              borderBottomWidth: 0, // Remove bottom border
              headerTransparent: true,
              backgroundColor: "#fff",
            },
            headerTitle: "", // Hide the title
            headerBackVisible: true, // Hide the back button
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
            headerStyle: {
              borderBottomWidth: 0, // Remove bottom border
              headerTransparent: true,
              backgroundColor: "#fff",
            },
            headerTitle: "", // Hide the title
            headerBackVisible: true, // Hide the back button
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
