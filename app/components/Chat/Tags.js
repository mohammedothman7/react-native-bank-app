import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { COLORS } from "../../../assets/colors/colors";

const Tags = ({ data }) => {
  const { text, textColor, backgroundColor } = data;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={{ color: textColor, fontWeight: "500" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: COLORS.yellow,
    borderRadius: 30,
    alignItems: "center",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {},
});
