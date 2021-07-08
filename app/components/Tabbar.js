import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../assets/colors/colors";

const Tabbar = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const handlePress = (tab) => {
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
      <TouchableOpacity style={styles} onPress={() => handlePress("Budget")}>
        <Icon
          name="basket-outline"
          size={40}
          color={activeTab === "Budget" ? COLORS.yellow : COLORS.white}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles} onPress={() => handlePress("Card")}>
        <Icon
          name="credit-card-outline"
          size={40}
          color={activeTab === "Card" ? COLORS.yellow : COLORS.white}
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
    height: 70,
    backgroundColor: "#353535",
    paddingBottom: Platform.OS === "android" ? 0 : 10,
  },
});
