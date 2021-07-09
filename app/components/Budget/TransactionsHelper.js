import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { COLORS } from "../../../assets/colors/colors";

const TransactionsHelper = ({ data }) => {
  return (
    <View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.transactionsTitle}>{data.date}</Text>
      </View>
      {data.data.map((item, index) => {
        const { title, subtext, logo, amount } = item;

        return (
          <View style={styles.transactionsRow} key={index}>
            <Image style={styles.transactionsLogo} source={logo} />
            <View style={styles.transactionsRowText}>
              <View>
                <Text style={styles.transactionsRowTextTitle}>{title}</Text>
                <Text style={styles.transactionsRowTextSubtext}>{subtext}</Text>
              </View>
              <Text style={styles.transactionsRowAmount}>{amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default TransactionsHelper;

const styles = StyleSheet.create({
  transactionsTitle: {
    color: COLORS.white,
    fontSize: 22,
    paddingTop: 25,
    marginBottom: 16,
  },
  transactionsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  transactionsLogo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    marginLeft: 20,
  },
  transactionsRowText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  transactionsRowTextTitle: {
    color: COLORS.white,
    fontSize: 16,
    marginBottom: 2,
  },
  transactionsRowTextSubtext: {
    color: "gray",
    fontSize: 12,
  },
  transactionsRowAmount: {
    color: COLORS.white,
    fontSize: 16,
  },
});
