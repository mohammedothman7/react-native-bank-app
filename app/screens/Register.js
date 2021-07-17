import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import axios from "axios";

import { Context } from "../Context";
import { COLORS } from "../../assets/colors/colors";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [authToken, setAuthToken] = useContext(Context);

  const handleSubmit = () => {
    axios
      .post(`http://192.168.4.48:8000/api/auth/register/`, {
        firstName,
        lastName,
        email,
        username,
        password,
      })
      .then((response) => {
        if (response.status !== 200 && !response.data.token) {
          return;
        }
        setAuthToken(response.data.token);
        AsyncStorage.setItem("authToken", response.data.token);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.spacing}>
        {/* Logo */}
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo-2.png")}
        />

        {/* Text input */}
        <View style={styles.textInputSpacing}>
          <Text style={styles.label}>First name</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter first name"
              placeholderTextColor={"gray"}
              onChangeText={(firstName) => setFirstName(firstName)}
              value={firstName}
            />
          </View>
          <Text style={styles.label}>Last name</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter last name"
              placeholderTextColor={"gray"}
              onChangeText={(lastName) => setLastName(lastName)}
              value={lastName}
            />
          </View>
          <Text style={styles.label}>Username</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter username"
              placeholderTextColor={"gray"}
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>
          <Text style={styles.label}>Username</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter username"
              placeholderTextColor={"gray"}
              onChangeText={(username) => setUsername(username)}
              value={username}
            />
          </View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              placeholderTextColor={"gray"}
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
          </View>
          <Text
            style={styles.subtext}
            onPress={() => navigation.navigate("Register")}
          >
            Don't have an account? Create one now!
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={[
            styles.register,
            {
              marginTop: 30,
              backgroundColor: COLORS.yellow,
            },
          ]}
          onPress={handleSubmit}
        >
          <Text style={[styles.registerText, { color: COLORS.black }]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2121",
    alignItems: "center",
    justifyContent: "center",
  },
  spacing: {
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 32,
    resizeMode: "contain",
  },
  textInputSpacing: {
    width: "100%",
    marginTop: 32,
  },
  textInputWrapper: {
    marginBottom: 22,
    backgroundColor: "#2b2b2b",
    width: "100%",
    borderRadius: 30,
    justifyContent: "center",
  },
  textInput: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    color: COLORS.white,
    fontSize: 18,
  },
  label: {
    marginBottom: 6,
    color: COLORS.white,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  register: {
    width: 325,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.yellow,
    borderRadius: 38,
  },
  registerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  subtext: {
    color: "gray",
    paddingHorizontal: 20,
    textDecorationLine: "underline",
  },
});
