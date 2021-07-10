import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../../assets/colors/colors";

const Messages = ({ data }) => {
  const {
    name,
    subtext,
    date,
    read,
    image,
    backgroundColorStart,
    backgroundColorEnd,
    resizeMode,
  } = data;

  return (
    <View style={styles.messagesRow}>
      <LinearGradient
        style={[styles.messageRowImage]}
        colors={[backgroundColorStart, backgroundColorEnd]}
        locations={[0.5, 0.75]}
      >
        <Image
          source={image}
          style={{
            width: 32,
            height: 40,
            resizeMode: resizeMode ? "contain" : "cover",
          }}
        />
      </LinearGradient>
      <View style={{ paddingLeft: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: Dimensions.get("window").width - 90,
          }}
        >
          <Text style={styles.name}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            {read && <Icon name="check-all" size={16} color="gray" />}
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <View>
          <Text numberOfLines={1} style={styles.subtext}>
            {subtext}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  messagesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  messageRowImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  name: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  date: {
    marginLeft: 4,
    color: "gray",
  },
  subtext: {
    // maxWidth: "90%",
    color: "gray",
    width: Dimensions.get("window").width - 120,
  },
});
