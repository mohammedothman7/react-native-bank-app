import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../assets/colors/colors";

import Cards from "../components/Home/Cards";
import Widgets from "../components/Home/Widgets";
import Loans from "../components/Home/Loans";
import Investments from "../components/Home/Investments";
import Tabbar from "../components/Tabbar";

const CARDS_DATA = [
  {
    title: "Salary",
    amount: "2,230",
    lastFourDigits: "6917",
    cardColor: COLORS.mint,
  },
  {
    title: "Savings account",
    amount: "5,532",
    lastFourDigits: "4552",
    cardColor: COLORS.yellow,
  },
  {
    title: "Checking account",
    amount: "2,742",
    lastFourDigits: "3227",
    cardColor: COLORS.lilac,
  },
];

const FINANCE_WIDGETS = [
  {
    title: "Bonuses",
    icon: "star-outline",
    color: COLORS.yellow,
  },
  {
    title: "Budget",
    icon: "wallet-outline",
    color: COLORS.mint,
  },
  {
    title: "Reports",
    icon: "finance",
    color: COLORS.lilac,
  },
  {
    title: "Credit Score",
    icon: "speedometer",
    color: COLORS.yellow,
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Header */}
          <View style={styles.header}>
            <Image
              style={styles.headerLogo}
              source={require("../../assets/images/logo-2.png")}
            />
            <TouchableOpacity style={styles.headerOptions}>
              <Image
                style={styles.headerOptionsIcon}
                source={require("../../assets/images/profile-image.png")}
              />
            </TouchableOpacity>
          </View>

          {/* Balance */}
          <View style={styles.balanceWrapper}>
            <Text style={styles.balanceText}>Your balance</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.totalBalanceText}>$ 7,896.31</Text>
              <TouchableOpacity style={styles.searchWrapper}>
                <Icon
                  styles={styles.searchIcon}
                  name="magnify"
                  size={28}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Cards */}
          <FlatList
            style={styles.cardsWrapper}
            data={CARDS_DATA}
            renderItem={Cards}
            horizontal={true}
            keyExtractor={(item) => item.lastFourDigits}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          />

          {/* Finance Widgets */}
          <View style={styles.financeWrapper}>
            <Text style={styles.financeTitle}>Finance</Text>

            <FlatList
              style={styles.financeWidget}
              data={FINANCE_WIDGETS}
              renderItem={Widgets}
              horizontal={true}
              keyExtractor={(item) => item.title}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
            />
          </View>

          {/* Loans */}
          <Loans />

          {/* Investments */}
          <Investments />
        </ScrollView>
      </SafeAreaView>
      <Tabbar navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2121",
    maxHeight: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  headerLogo: {
    width: 75,
    height: 30,
    resizeMode: "contain",
  },
  headerOptions: {
    position: "absolute",
    left: 25,
    backgroundColor: COLORS.yellow,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  headerOptionsIcon: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  balanceWrapper: {
    marginTop: 32,
  },
  balanceText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 20,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalBalanceText: {
    color: COLORS.white,
    fontSize: 28,
    marginTop: 5,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  searchWrapper: {
    backgroundColor: "#3E3E3E",
    right: 15,
    position: "absolute",
    borderRadius: 50,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    resizeMode: "contain",
  },
  cardsWrapper: {
    marginTop: 24,
    maxHeight: 170,
    minHeight: 170,
  },
  financeWrapper: {
    marginTop: 10,
  },
  financeTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 20,
  },
  financeWidget: {
    marginTop: 14,
    // maxHeight: 100,
  },
});
