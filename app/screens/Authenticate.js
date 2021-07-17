import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";

import { Context } from "../Context";
import { COLORS } from "../../assets/colors/colors";

const Authenticate = ({ navigation }) => {
  const [authToken, setAuthToken] = useContext(Context);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  const handleBiometricAuth = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricSupported(true);

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();

    if (compatible && savedBiometrics) {
      const status = await LocalAuthentication.authenticateAsync();
      return status.success;
    }

    return false;
  };

  useEffect(() => {
    const fetchToken = async () => {
      const value = await AsyncStorage.getItem("authToken");
      if (value !== null && (await handleBiometricAuth()) === true) {
        setAuthToken(value);
        navigation.navigate("Home");
      }
    };
    fetchToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/images/logo-2.png")}
        />
        <TouchableOpacity style={styles.headerOptions}>
          <Image
            style={styles.headerOptionsIcon}
            source={require("../../assets/images/edit_icon.png")}
          />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/images/logo-2.png")}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.login,
            {
              marginTop: 30,
              backgroundColor: "gray",
            },
          ]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={[styles.loginText, { color: COLORS.white }]}>
            Open an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Authenticate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2121",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  headerLogo: {
    width: 75,
    height: 30,
    resizeMode: "contain",
  },
  headerOptions: {
    position: "absolute",
    right: 25,
    backgroundColor: "#3E3E3E",
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 200,
  },
  logoImage: {
    width: 150,
    height: 32,
    resizeMode: "contain",
  },
  buttons: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    width: 325,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.yellow,
    borderRadius: 38,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
