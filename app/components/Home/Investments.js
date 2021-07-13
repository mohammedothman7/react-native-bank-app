import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import InvestmentsHelper from "./InvestmentsHelper";

import { COLORS } from "../../../assets/colors/colors";

const STOCKS_DATA = [
  {
    title: "TSLA",
    icon: "flash",
    price: "432.83",
    percent: "81%",
  },
  {
    title: "AAPL",
    icon: "apple",
    price: "126.97",
    percent: "12%",
  },
];

const CRYPTO_DATA = [
  {
    title: "BTC",
    icon: "bitcoin",
    price: "9,076.46",
    percent: "226%",
  },
  {
    title: "LTC",
    icon: "litecoin",
    price: "176.55",
    percent: "136%",
  },
];

const INVESTMENTS = [
  {
    title: "Stocks",
    data: STOCKS_DATA,
  },
  {
    title: "Crypto",
    data: CRYPTO_DATA,
  },
];

const Investments = () => {
  const [showInvestments, setShowInvestments] = useState(true);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowInvestments(!showInvestments)}>
          <Icon
            name={showInvestments ? "chevron-down" : "chevron-up"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Investments</Text>
      </View>
      {showInvestments && (
        <View style={styles.investments}>
          {INVESTMENTS.map((item, index) => (
            <InvestmentsHelper items={item} key={index} />
          ))}
        </View>
      )}
    </View>
  );
};

export default Investments;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "500",
    paddingLeft: 8,
  },
  investments: {
    paddingHorizontal: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
