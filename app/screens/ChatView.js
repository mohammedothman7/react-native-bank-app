import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../assets/colors/colors";

import Chats from "../components/ChatView/Chats";

const CHATS = [
  {
    title: "Transfer sent",
    amount: "$15",
    info: "sent",
  },
  {
    title: "Transfer received",
    amount: "$15",
    info: "received",
  },
  {
    title: "Transfer received",
    amount: "$120",
    info: "received",
  },
  {
    title: "Transfer sent",
    amount: "$95",
    info: "sent",
  },
  {
    title: "Transfer sent",
    amount: "$15",
    info: "sent",
  },
  {
    title: "Transfer received",
    amount: "$15",
    info: "received",
  },
  {
    title: "Transfer received",
    amount: "$120",
    info: "received",
  },
  {
    title: "Transfer sent",
    amount: "$95",
    info: "sent",
  },
  {
    title: "Transfer sent",
    amount: "$15",
    info: "sent",
  },
  {
    title: "Transfer received",
    amount: "$15",
    info: "received",
  },
  {
    title: "Transfer received",
    amount: "$120",
    info: "received",
  },
  {
    title: "Transfer sent",
    amount: "$95",
    info: "sent",
  },
];

const ChatView = ({ route, navigation }) => {
  const { item } = route.params;
  const { name, image, backgroundColorStart, backgroundColorEnd } = item;
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginHorizontal: 20, flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={32} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerContact}>
            <LinearGradient
              style={[styles.contactImage]}
              colors={[backgroundColorStart, backgroundColorEnd]}
              locations={[0.5, 0.75]}
            >
              <Image
                source={image}
                style={{
                  width: 32,
                  height: 40,
                  resizeMode: "cover",
                }}
              />
            </LinearGradient>
          </View>
          <TouchableOpacity style={styles.icon}>
            <Icon name="dots-vertical" size={32} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{name}</Text>

        {/* Chats */}
        <ScrollView style={styles.chats} showsVerticalScrollIndicator={false}>
          {CHATS.map((item, index) => (
            <Chats data={item} key={index} />
          ))}
        </ScrollView>
        {/* Footer */}
        <KeyboardAvoidingView
          style={styles.footer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={10}
        >
          <TouchableOpacity style={styles.iconContainer}>
            <Text style={{ fontSize: 20 }}>$</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Message"
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="plus" size={26} color={COLORS.black} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default ChatView;

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
  icon: {
    backgroundColor: "#3E3E3E",
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContact: {},
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  name: {
    textAlign: "center",
    marginTop: 2,
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
  chats: {
    marginTop: 20,
    maxHeight: "100%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.yellow,
    borderRadius: 20,
  },
  textInput: {
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.grayPrimary,
    color: COLORS.white,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },
});
