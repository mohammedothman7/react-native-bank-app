import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Cards = ({ item, onPress, backgroundColor, textColor }) => {
  const { title, amount, lastFourDigits, cardColor } = item;
  return (
    <TouchableOpacity style={[styles.container]}>
      <LinearGradient
        style={[styles.background]}
        colors={["#eaeaea", cardColor]}
      >
        <View style={styles.wrapper}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/visa-logo.png")}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.amount}>$ {amount}</Text>
          <Text style={styles.lastFourDigits}>** {lastFourDigits}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    width: 150,
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 30,
  },
  wrapper: {
    marginLeft: 16,
  },
  image: {
    width: 40,
    height: 20,
    marginTop: 24,
  },
  title: {
    marginTop: 20,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lastFourDigits: {
    marginTop: 26,
    paddingBottom: 10,
  },
});
