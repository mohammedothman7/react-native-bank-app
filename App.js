import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./app/screens/Home";
import Authenticate from "./app/screens/Authenticate";
import Card from "./app/screens/Card";
import Budget from "./app/screens/Budget";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Authenticate"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Authenticate" component={Authenticate} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Budget" component={Budget} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2121",
  },
});
