import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../assets/colors/colors";

import Tags from "../components/Chat/Tags";
import Widgets from "../components/Home/Widgets";
import Messages from "../components/Chat/Messages";

const TAGS = [
  {
    text: "Actions",
    textColor: COLORS.black,
    backgroundColor: COLORS.yellow,
  },
  {
    text: "Channels",
    textColor: COLORS.white,
    backgroundColor: COLORS.grayPrimary,
  },
  {
    text: "Postcards",
    textColor: COLORS.white,
    backgroundColor: COLORS.grayPrimary,
  },
];

const FINANCE_WIDGETS = [
  {
    title: "Transfer money",
    icon: "star-outline",
    color: COLORS.yellow,
    navigate: "Transfer",
  },
  {
    title: "Lou Bonuses",
    icon: "wallet-outline",
    color: COLORS.mint,
  },
  {
    title: "Lou Assets",
    icon: "finance",
    color: COLORS.lilac,
  },
  {
    title: "Credit Score",
    icon: "speedometer",
    color: COLORS.yellow,
  },
];

const MESSAGES = [
  {
    name: "LouBank",
    subtext: "Updates! Find out what's new with the update.",
    date: "July 5",
    read: true,
    image: require("../../assets/images/contacts/logo.png"),
    backgroundColorStart: COLORS.yellow,
    backgroundColorEnd: "#F5FFA8",
    resizeMode: "contain",
  },
  {
    name: "Jennifer",
    subtext: "Hi! I returned the debt.",
    date: "July 5",
    read: false,
    image: require("../../assets/images/contacts/jeniffer.png"),
    backgroundColorStart: COLORS.mint,
    backgroundColorEnd: "#8AB4B1",
  },
  {
    name: "John Baldwin",
    subtext: "Thanks for lunch!",
    date: "July 3",
    read: true,
    image: require("../../assets/images/contacts/john.png"),
    backgroundColorStart: COLORS.pink,
    backgroundColorEnd: "#CA7F8D",
  },
  {
    name: "Maya 💫",
    subtext: "Thanks for letting me use your netflix account",
    date: "July 3",
    read: true,
    image: require("../../assets/images/contacts/maya.png"),
    backgroundColorStart: COLORS.orange,
    backgroundColorEnd: "#E8C898",
  },
  {
    name: "Alice 🌸",
    subtext: "Happy birthday!",
    date: "May 17",
    read: true,
    image: require("../../assets/images/contacts/alice.png"),
    backgroundColorStart: COLORS.lilac,
    backgroundColorEnd: "#B8A9C6",
  },
  {
    name: "Stefan",
    subtext: "Happy birthday!",
    date: "May 17",
    read: true,
    image: require("../../assets/images/contacts/stefan.png"),
    backgroundColorStart: COLORS.mint,
    backgroundColorEnd: COLORS.mint,
  },
  {
    name: "Nico",
    subtext: "Thanks",
    date: "May 12",
    read: false,
    image: require("../../assets/images/contacts/nico.png"),
    backgroundColorStart: COLORS.pink,
    backgroundColorEnd: "#CA7F8D",
  },
];

const Chat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={{ paddingHorizontal: 20 }}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerOptions}>
              <Image
                style={styles.headerOptionsIcon}
                source={require("../../assets/images/profile-image.png")}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder="Name or phone number"
              placeholderTextColor={COLORS.white}
            />
            <TouchableOpacity style={styles.headerNewChat}>
              <Icon name="chat-plus-outline" size={18} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text style={styles.title}>Dialogues</Text>

          {/* Tags */}
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View style={styles.tagsContainer}>
              {TAGS.map((item, index) => (
                <Tags data={item} key={index} />
              ))}
            </View>
            <TouchableOpacity style={styles.filter}>
              <Icon name="filter-outline" size={16} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          {/* Widgets */}
          <TouchableOpacity
            style={styles.widgets}
            onPress={() => navigation.navigate("Transfer")}
          >
            <FlatList
              style={styles.financeWidget}
              data={FINANCE_WIDGETS}
              renderItem={Widgets}
              horizontal={true}
              keyExtractor={(item) => item.title}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
              extraData={[navigation]}
            />
          </TouchableOpacity>
        </View>
        {/* Messages */}
        <ScrollView style={styles.messages}>
          <Text style={styles.messagesTitle}>Messages</Text>

          {MESSAGES.map((item, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ChatView", {
                  item,
                })
              }
              key={index}
            >
              <Messages data={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2121",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerOptions: {
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
  textInput: {
    backgroundColor: "#1E1E1E",
    color: COLORS.white,
    borderRadius: 20,
    width: "75%",
    paddingHorizontal: 20,
    height: 32,
  },
  headerNewChat: {
    backgroundColor: "#3E3E3E",
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 40,
    marginBottom: 12,
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "500",
  },
  tagsContainer: {
    flexDirection: "row",
  },
  filter: {
    backgroundColor: COLORS.grayPrimary,
    paddingHorizontal: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 30,
  },
  widgets: {
    marginTop: 24,
    marginBottom: 16,
    height: 110,
  },
  messages: {
    backgroundColor: COLORS.grayPrimary,
    paddingHorizontal: 20,
    // borderRadius: 40,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  messagesTitle: {
    color: COLORS.white,
    fontSize: 22,
    paddingTop: 25,
    marginBottom: 16,
  },
});
