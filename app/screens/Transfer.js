import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../assets/colors/colors";

import Messages from "../components/Chat/Messages";
import TransferView from "../components/Transfer/TransferView";

const CONTACTS_PREVIEW = [
  {
    name: "John",
    image: require("../../assets/images/contacts/john.png"),
    backgroundColorStart: COLORS.pink,
    backgroundColorEnd: "#CA7F8D",
  },
  {
    name: "Alice",
    image: require("../../assets/images/contacts/alice.png"),
    backgroundColorStart: COLORS.lilac,
    backgroundColorEnd: "#B8A9C6",
  },
  {
    name: "Maya 💫",
    image: require("../../assets/images/contacts/maya.png"),
    backgroundColorStart: COLORS.orange,
    backgroundColorEnd: "#E8C898",
  },
  {
    name: "Send",
    backgroundColorStart: COLORS.black,
    backgroundColorEnd: COLORS.black,
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

const Transfer = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Transfer modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TransferView
                data={currentContact}
                setModalVisible={setModalVisible}
              />
            </View>
          </View>
        </Modal>

        <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.previousPage}
              onPress={() => navigation.navigate("Chat")}
            >
              <Icon name="chevron-left" size={32} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Transfer</Text>
            <View style={{ width: 32 }} />
          </View>

          {/* Balance */}
          <Text style={styles.balanceTitle}>Balance</Text>
          <Text style={styles.balanceAmount}>$7,896</Text>

          {/* Contacts preview */}
          <LinearGradient
            style={styles.contactsPreview}
            colors={[COLORS.mint, "#8AB4B1"]}
            locations={[0.5, 0.9]}
          >
            <Text style={styles.contactsPreviewText}>Send money to</Text>
            <View style={styles.contactsPreviewList}>
              {CONTACTS_PREVIEW.map((contact, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.contactsPreviewItem}
                  onPress={() => navigation.navigate("Transfer", { contact })}
                >
                  <LinearGradient
                    style={styles.contactsPreviewItemImage}
                    colors={[
                      contact.backgroundColorStart,
                      contact.backgroundColorEnd,
                    ]}
                    locations={[0.5, 0.75]}
                  >
                    {contact.image ? (
                      <Image
                        style={{
                          width: 32,
                          height: 40,
                          resizeMode: "contain",
                          marginTop: 10,
                        }}
                        source={contact.image}
                      />
                    ) : (
                      <Icon name="plus" size={22} color={COLORS.white} />
                    )}
                  </LinearGradient>
                  <Text style={styles.contactsPreviewItemText}>
                    {contact.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </LinearGradient>
        </View>
      </SafeAreaView>

      {/* Contacts */}
      <ScrollView style={styles.messages}>
        <Text style={styles.messagesTitle}>Messages</Text>

        {MESSAGES.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              setCurrentContact(item);
            }}
            key={index}
          >
            <Messages data={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Transfer;

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
  previousPage: {
    backgroundColor: "#3E3E3E",
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
  },
  balanceTitle: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
    fontWeight: "500",
  },
  balanceAmount: {
    color: COLORS.white,
    fontSize: 26,
    textAlign: "center",
    marginTop: 4,
    fontWeight: "700",
  },
  contactsPreview: {
    backgroundColor: COLORS.mint,
    height: 150,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 32,
  },
  contactsPreviewText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "500",
  },
  contactsPreviewList: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contactsPreviewItem: {},
  contactsPreviewItemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    marginTop: 18,
  },
  contactsPreviewItemText: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 5,
  },
  messages: {
    backgroundColor: COLORS.grayPrimary,
    paddingHorizontal: 20,
    // borderRadius: 40,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    marginTop: 32,
  },
  messagesTitle: {
    color: COLORS.white,
    fontSize: 22,
    paddingTop: 25,
    marginBottom: 16,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.grayPrimary,
    borderRadius: 40,
    padding: 35,
    width: "100%",
    height: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
