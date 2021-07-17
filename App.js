import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Context, Provider } from "./app/Context";
import { COLORS } from "./assets/colors/colors";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import Home from "./app/screens/Home";
import Authenticate from "./app/screens/Authenticate";
import Card from "./app/screens/Card";
import Budget from "./app/screens/Budget";
import Chat from "./app/screens/Chat";
import ChatView from "./app/screens/ChatView";
import Transfer from "./app/screens/Transfer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const bottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#353535",
          borderTopWidth: 0,
        },
        tabStyle: {
          marginTop: 20,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="home-outline"
                size={40}
                color={focused ? COLORS.yellow : COLORS.white}
                style={{ height: 40 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Card"
        component={Card}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="credit-card-outline"
                size={40}
                color={focused ? COLORS.yellow : COLORS.white}
                style={{ height: 40 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="basket-outline"
                size={40}
                color={focused ? COLORS.yellow : COLORS.white}
                style={{ height: 40 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="chat-processing-outline"
                size={40}
                color={focused ? COLORS.yellow : COLORS.white}
                style={{ height: 40 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Authenticate"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Authenticate" component={Authenticate} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="Home"
            children={bottomTabs}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="ChatView" component={ChatView} />
          <Stack.Screen name="Transfer" component={Transfer} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2121",
  },
});
