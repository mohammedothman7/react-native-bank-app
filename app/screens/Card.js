import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { COLORS } from "../../assets/colors/colors";

import CardCarousel from "../components/Card/CardCarousel";
import TransactionsHelper from "../components/Card/TransactionsHelper";
import Tabbar from "../components/Tabbar";

const DATA = [
  {
    name: "Mohammed Othman",
    exp: "12/24",
    lastFourDigits: "6917",
    cardImage: require("../../assets/images/cards/mint.png"),
  },
  {
    name: "Mohammed Othman",
    exp: "09/23",
    lastFourDigits: "4552",
    cardImage: require("../../assets/images/cards/yellow.png"),
  },
  {
    name: "Mohammed Othman",
    exp: "11/25",
    lastFourDigits: "9562",
    cardImage: require("../../assets/images/cards/black.png"),
    textColor: "white",
  },
  {
    name: "Mohammed Othman",
    exp: "04/24",
    lastFourDigits: "3227",
    cardImage: require("../../assets/images/cards/purple.png"),
  },
  {
    name: "Mohammed Othman",
    exp: "01/26",
    lastFourDigits: "2218",
    cardImage: require("../../assets/images/cards/green.png"),
  },
];

const TRANSACTIONS_DATA = [
  {
    icon: "incoming",
    title: "Transfer",
    subtext: "Incoming transfer",
    amount: "+ $3,100",
  },
  {
    icon: "outgoing",
    title: "Health",
    subtext: "Pharmacy",
    amount: "- $312.90",
  },
];

const TRANSACTIONS = [
  {
    date: "Today",
    data: TRANSACTIONS_DATA,
  },
  {
    date: "July 7th",
    data: [
      {
        icon: "outgoing",
        title: "Food",
        subtext: "Chipotle",
        amount: "- $26.17",
      },
    ],
  },
  {
    date: "July 5th",
    data: [
      {
        icon: "outgoing",
        title: "Travel",
        subtext: "Uber",
        amount: "- $54.86",
      },
      {
        icon: "incoming",
        title: "Transfer",
        subtext: "Incoming transfer",
        amount: "+ $474.67",
      },
      {
        icon: "incoming",
        title: "Transfer",
        subtext: "Incoming transfer",
        amount: "+ $32.42",
      },
    ],
  },
  { date: "July 2th", data: TRANSACTIONS_DATA },
];

const ACCOUNTS_DATA = [
  TRANSACTIONS,
  [
    {
      date: "July 5th",
      data: [
        {
          icon: "incoming",
          title: "Transfer",
          subtext: "Incoming transfer",
          amount: "+ $32.42",
        },
      ],
    },
  ],
  TRANSACTIONS,
  [
    {
      date: "July 7th",
      data: [
        {
          icon: "outgoing",
          title: "Food",
          subtext: "Chipotle",
          amount: "- $26.17",
        },
      ],
    },
    {
      date: "July 5th",
      data: [
        {
          icon: "outgoing",
          title: "Travel",
          subtext: "Uber",
          amount: "- $54.86",
        },
        {
          icon: "incoming",
          title: "Transfer",
          subtext: "Incoming transfer",
          amount: "+ $474.67",
        },
      ],
    },
  ],
  TRANSACTIONS,
  TRANSACTIONS,
];

const Card = ({ navigation }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>Your cards</Text>
          </View>
          <TouchableOpacity
            style={styles.previousPage}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={32} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Card carousel */}
        <Carousel
          renderItem={CardCarousel}
          data={DATA}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Math.round(Dimensions.get("window").width)}
          onSnapToItem={(cardIndex) => setCardIndex(cardIndex)}
          containerCustomStyle={{ maxHeight: 185 }}
        />

        <Pagination
          dotsLength={DATA.length}
          activeDotIndex={cardIndex}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: COLORS.yellow,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />

        {/* Transactions */}
        <ScrollView style={styles.transactions}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsHeaderTitle}>Transactions</Text>
          </View>
          {console.log(cardIndex)}
          {ACCOUNTS_DATA[cardIndex].map((item, index) => (
            <TransactionsHelper date={item.date} data={item.data} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2121",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginBottom: 24,
    marginTop: 10,
  },
  previousPage: {
    backgroundColor: "#3E3E3E",
    width: 32,
    height: 32,
    borderRadius: 20,
    position: "absolute",
    left: 20,
  },
  headerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
  headerTitleText: {
    color: COLORS.white,
    fontSize: 16,
  },
  transactions: {
    flex: 1,
    borderRadius: 26,
    backgroundColor: COLORS.grayPrimary,
    paddingHorizontal: 22,
  },
  transactionsHeader: {
    paddingTop: 32,
    marginBottom: 8,
  },
  transactionsHeaderTitle: {
    fontSize: 20,
    color: COLORS.white,
  },
});
