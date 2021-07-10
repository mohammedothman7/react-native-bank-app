import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../../assets/colors/colors";

const Chats = ({ data }) => {
  const { title, amount, info } = data;
  const isOwner = info === "sent";
  return (
    <View
      style={[
        styles.chatsContainer,
        {
          justifyContent: isOwner ? "flex-end" : "flex-start",
        },
      ]}
    >
      <View
        style={[
          styles.chatsBackground,
          {
            backgroundColor: isOwner ? COLORS.mint : COLORS.yellow,
            borderBottomLeftRadius: isOwner ? 30 : 0,
            borderBottomRightRadius: isOwner ? 0 : 30,
          },
        ]}
      >
        <Text style={styles.chatsTitle}>Transfer sent</Text>
        <Text style={styles.chatsAmount}>$15</Text>
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chatsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  chatsBackground: {
    backgroundColor: COLORS.mint,
    width: 155,
    paddingLeft: 15,
    paddingVertical: 8,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  chatsTitle: {
    paddingBottom: 3,
    fontSize: 16,
  },
  chatsAmount: {
    fontSize: 22,
    fontWeight: "500",
  },
});
