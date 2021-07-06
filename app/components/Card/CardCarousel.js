import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const CardCarousel = ({ item }) => {
  const { name, exp, lastFourDigits, cardImage, textColor } = item;
  const TEXT_COLOR = textColor ? "white" : "black";

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ImageBackground
        source={item.cardImage}
        style={[styles.image, { color: TEXT_COLOR }]}
      >
        <Text style={[styles.name, { color: TEXT_COLOR }]}>{item.name}</Text>
        <Text style={[styles.valid, { color: TEXT_COLOR }]}>Valid Thru</Text>
        <Text style={[styles.exp, { color: TEXT_COLOR }]}>{item.exp}</Text>
        <Text style={[styles.lastFourDigits, { color: TEXT_COLOR }]}>
          {item.lastFourDigits}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default CardCarousel;

const styles = StyleSheet.create({
  image: {
    width: 310,
    resizeMode: "cover",
    height: 185,
  },
  name: {
    position: "absolute",
    left: 25,
    bottom: 15,
    fontWeight: "500",
  },
  valid: {
    position: "absolute",
    right: 15,
    bottom: 75,
    color: "gray",
  },
  exp: {
    position: "absolute",
    right: 25,
    bottom: 55,
    fontWeight: "bold",
    fontSize: 16,
  },
  lastFourDigits: {
    position: "absolute",
    left: 125,
    bottom: 55,
    fontWeight: "bold",
    fontSize: 16,
  },
});
