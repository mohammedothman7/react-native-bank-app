import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../assets/colors/colors";

const Tabbar = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const handlePress = (tab) => {
    console.log(tab);
    setActiveTab(tab);
    navigation.navigate(tab);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles} onPress={() => handlePress("Home")}>
        <Icon
          name="home-outline"
          size={40}
          color={activeTab === "Home" ? COLORS.yellow : COLORS.white}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles} onPress={() => handlePress("Store")}>
        <Icon
          name="basket-outline"
          size={40}
          color={activeTab === "Store" ? COLORS.yellow : COLORS.white}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles} onPress={() => handlePress("Credit")}>
        <Icon
          name="credit-card-outline"
          size={40}
          color={activeTab === "Credit" ? COLORS.yellow : COLORS.white}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles} onPress={() => handlePress("Chat")}>
        <Icon
          name="chat-processing-outline"
          size={40}
          color={activeTab === "Chat" ? COLORS.yellow : COLORS.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 80,
    backgroundColor: "#353535",
  },
});
