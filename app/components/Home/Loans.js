import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../../../assets/colors/colors";

const Loans = () => {
  const [showLoans, setShowLoans] = useState(true);
  const [showAd, setShowAd] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowLoans(!showLoans)}>
          <Icon
            name={showLoans ? "chevron-down" : "chevron-up"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Current Loans</Text>
        <TouchableOpacity style={styles.headerRight}>
          <Icon name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {showLoans && (
        <View>
          {/* Loans */}
          <View style={[styles.loans, styles.shadow]}>
            <View style={styles.icon}>
              <Icon name="checkbook" size={24} color={COLORS.black} />
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>Account 3874825</Text>
              <Text style={styles.date}>Expires: 12/22/2023</Text>
            </View>
            <View style={styles.amount}>
              <Text style={styles.infoText}>$ 78.92</Text>
              <Text style={styles.date}>Rate 3.5%</Text>
            </View>
          </View>

          {showAd && (
            <View style={styles.shadow}>
              <LinearGradient
                style={styles.loans}
                colors={["#eaeaea", COLORS.mint]}
              >
                <View style={[styles.icon, { backgroundColor: COLORS.black }]}>
                  <Icon name="lightning-bolt" size={24} color={COLORS.yellow} />
                </View>
                <View style={styles.info}>
                  <Text style={[styles.infoText, { color: COLORS.black }]}>
                    Start investing now!
                  </Text>
                  <Text style={styles.date}>
                    Protected savings and investment plans
                  </Text>
                  <TouchableOpacity
                    style={styles.closeWrapper}
                    onPress={() => setShowAd(false)}
                  >
                    <Icon
                      style={styles.close}
                      name="close"
                      size={24}
                      color={COLORS.black}
                    />
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Loans;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "500",
    paddingLeft: 8,
  },
  headerRight: {
    position: "absolute",
    right: 0,
    backgroundColor: "#3E3E3E",
    borderRadius: 50,
    alignItems: "center",
  },
  loans: {
    paddingVertical: 20,
    backgroundColor: "#2E2F2F",
    marginTop: 12,
    borderRadius: 26,
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: COLORS.mint,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  info: {
    marginLeft: 12,
    flexDirection: "column",
  },
  infoText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "500",
  },
  date: {
    paddingTop: 2,
    color: "gray",
  },
  amount: {
    paddingLeft: 64,
  },
  amountText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "500",
  },
  closeWrapper: {
    position: "absolute",
    right: -10,
    marginTop: -10,
  },
});
