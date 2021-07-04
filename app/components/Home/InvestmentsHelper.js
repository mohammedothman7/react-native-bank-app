import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../../assets/colors/colors";

const InvestmentsHelper = ({ items }) => {
  const { title, data } = items;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerPrice}>Price</Text>
        <Text style={styles.headerPercent}>%</Text>
      </View>

      <View style={styles.details}>
        {data.map((item, index) => (
          <View style={styles.detailsWrapper} key={index}>
            <View style={styles.heading}>
              <View style={styles.iconWrapper}>
                <Icon
                  style={styles.icon}
                  name={item.icon}
                  size={20}
                  color={COLORS.black}
                />
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <View>
              <Text style={styles.percent}>{item.percent}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default InvestmentsHelper;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#2E2F2F",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    color: "gray",
    marginTop: 20,
  },
  headerTitle: {
    color: "gray",
  },
  headerPrice: {
    color: "gray",
  },
  headerPercent: {
    color: "gray",
  },
  details: {
    borderRadius: 25,
    marginTop: 10,
    justifyContent: "center",
  },
  detailsWrapper: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconWrapper: {
    backgroundColor: COLORS.mint,
    borderRadius: 8,
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -20,
    marginRight: 10,
    alignContent: "stretch",
  },
  icon: {
    // resizeMode: "contain",
  },
  dataWrapper: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 16,
  },
  price: {
    color: COLORS.white,
    fontSize: 16,
  },
  percent: {
    color: COLORS.white,
    fontSize: 16,
  },
});
