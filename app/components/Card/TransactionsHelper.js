import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../../assets/colors/colors";

const TransactionsHelper = ({ date, data }) => {
  return (
    <View style={styles.transactionsData}>
      <Text style={styles.transactionsDataTitle}>{date}</Text>
      {data.map((item, index) => {
        const { amount, icon, subtext, title } = item;
        const isIcon = icon === "incoming";
        return (
          <View style={styles.transactionsDataRow} key={index}>
            <View
              style={[
                styles.transactionsDataRowIcon,
                {
                  backgroundColor: isIcon ? COLORS.yellow : COLORS.mint,
                },
              ]}
            >
              <Icon
                name={isIcon ? "arrow-collapse-down" : "arrow-collapse-up"}
                size={16}
                color={COLORS.black}
              />
            </View>
            <View style={styles.transactionsDataRowFlex}>
              <View style={styles.transactionsDataRowText}>
                <Text style={styles.transactionsDataRowTitle}>{title}</Text>
                <Text style={styles.transactionsDataRowSubtext}>{subtext}</Text>
              </View>
              <View style={styles.transactionsDataRowAmount}>
                <Text style={styles.transactionsDataRowAmountText}>
                  {amount}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default TransactionsHelper;

const styles = StyleSheet.create({
  transactionsData: {
    paddingTop: 16,
  },
  transactionsDataTitle: {
    color: COLORS.white,
    marginBottom: 16,
  },
  transactionsDataRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  transactionsDataRowIcon: {
    width: 32,
    height: 32,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionsDataRowFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionsDataRowText: {
    paddingLeft: 16,
  },
  transactionsDataRowTitle: {
    fontSize: 16,
    color: COLORS.white,
    paddingBottom: 2,
  },
  transactionsDataRowSubtext: {
    color: "gray",
  },
  transactionsDataRowAmountText: {
    color: COLORS.white,
    fontSize: 16,
  },
});
