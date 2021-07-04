import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../../assets/colors/colors";

const Widgets = ({ item }) => {
  const { title, icon, color } = item;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.icon, { backgroundColor: color }]}>
        <Icon name={icon} size={24} color={COLORS.black} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Widgets;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E2F2F",
    height: 100,
    width: 100,
    marginRight: 14,
    borderRadius: 25,
  },
  icon: {
    marginLeft: 16,
    marginTop: 16,
    height: 32,
    width: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: 14,
    paddingHorizontal: 16,
    color: COLORS.white,
  },
});
