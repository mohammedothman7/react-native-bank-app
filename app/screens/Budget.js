import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LineChart } from "react-native-chart-kit";

import { COLORS } from "../../assets/colors/colors";
import TransactionsHelper from "../components/Budget/TransactionsHelper";

const TRANSACTIONS_DATA = [
  {
    title: "Webflow",
    subtext: "Outgoing transfer",
    logo: require("../../assets/images/logos/webflow.png"),
    amount: "- $45",
  },
  {
    title: "Youtube",
    subtext: "Monthly subscription",
    logo: require("../../assets/images/logos/youtube.png"),
    amount: "- $15",
  },
  {
    title: "Sketch",
    subtext: "Annual subscription",
    logo: require("../../assets/images/logos/sketch.png"),
    amount: "- $79",
  },
  {
    title: "Unsplash",
    subtext: "Annual subscription",
    logo: require("../../assets/images/logos/unsplash.png"),
    amount: "- $9",
  },
];

const TRANSACTIONS = [
  { date: "July 8th, 2021", data: TRANSACTIONS_DATA },
  { date: "July 5th, 2021", data: TRANSACTIONS_DATA },
];

const Budget = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.previousPage}
            onPress={() => navigation.navigate("Home")}
          >
            <Icon name="chevron-left" size={32} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.headerText}>My budget</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="filter-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <SafeAreaView>
            {/* Budget */}
            <View style={styles.budget}>
              <View style={styles.budgetRow}>
                <View>
                  <Text style={styles.budgetAmount}>$1,345</Text>
                  <Text style={styles.budgetText}>
                    September prediction $2,010
                  </Text>
                </View>
                <Text style={styles.budgetText}>July 2021</Text>
              </View>
            </View>

            {/* Charts */}
            <View style={{ justifyContent: "center" }}>
              <LineChart
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get("window").width + 70} // from react-native
                height={250}
                bezier
                withHorizontalLabels={false}
                withHorizontalLines={false}
                chartConfig={{
                  backgroundColor: "#1E2121",
                  backgroundGradientFrom: "#1E2121",
                  backgroundGradientTo: "#1E2121",
                  color: (opacity = 1) => COLORS.mint,
                  labelColor: (opacity = 1) => COLORS.mint,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: COLORS.white,
                  },
                  propsForBackgroundLines: {
                    stroke: "gray",
                    r: "6",
                    strokeWidth: "1",
                  },
                }}
                bezier
                style={{
                  marginTop: 30,
                  marginBottom: 35,
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </View>
          </SafeAreaView>

          <View style={styles.transactions}>
            {/* Transactions */}
            {TRANSACTIONS.map((item, index) => (
              <TransactionsHelper data={item} key={index} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2121",
  },
  previousPage: {
    backgroundColor: "#3E3E3E",
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 15,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: "#3E3E3E",
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4,
  },
  budget: {
    marginTop: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.grayPrimary,
    borderRadius: 30,
  },
  budgetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  budgetAmount: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "500",
  },
  budgetText: {
    color: "lightgray",
    fontSize: 12,
    paddingTop: 5,
  },
  transactions: {
    backgroundColor: COLORS.grayPrimary,
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 50,
  },
});
