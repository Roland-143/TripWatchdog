import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TripSetupScreen from "./screens/TripSetupScreen";
import { RootStackParamList } from "./types";
import React from "react";
import { API_BASE_URL } from '@env';

console.log("API_BASE_URL:", API_BASE_URL); // Debugging line to check if the environment variable is loaded

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TripSetup" component={TripSetupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
