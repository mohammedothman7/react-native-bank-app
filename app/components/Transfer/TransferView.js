import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NumberFormat from "react-number-format";

import { COLORS } from "../../../assets/colors/colors";

const numbers = [
  {
    number: "1",
  },
  {
    number: "2",
    letters: "A B C",
  },
  {
    number: "3",
    letters: "D E F",
  },
  {
    number: "4",
    letters: "G H I",
  },
  {
    number: "5",
    letters: "J K L",
  },
  {
    number: "6",
    letters: "M N O",
  },
  {
    number: "7",
    letters: "P Q R S",
  },
  {
    number: "8",
    letters: "T U V",
  },
  {
    number: "9",
    letters: "W X Y Z",
  },
  {
    number: ".",
  },
  {
    number: "0",
  },
];

const TransferView = ({ data, setModalVisible }) => {
  const { name, image, backgroundColorStart, backgroundColorEnd } = data;

  const [amount, setAmount] = useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cancelWrapper}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>

      {/* Contact */}
      <LinearGradient
        style={styles.contactsPreviewItemImage}
        colors={[backgroundColorStart, backgroundColorEnd]}
        locations={[0.5, 0.75]}
      >
        <Image
          style={{
            width: 60,
            height: 50,
            resizeMode: "contain",
            marginTop: 10,
          }}
          source={image}
        />
      </LinearGradient>
      <Text style={styles.name}>{name}</Text>

      {/* Amount */}
      <View
        style={styles.textInput}
        placeholder="Amount"
        placeholderTextColor={COLORS.white}
        keyboardType="numeric"
        numberOfLines={1}
        onChange={(text) => setAmount(text)}
        value={amount}
        textAlign="center"
      >
        {/* <Text style={styles.textInputText}>{amount}</Text> */}
        <NumberFormat
          value={amount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(formattedValue) => (
            <Text style={styles.textInputText}>{formattedValue}</Text>
          )}
        />
      </View>

      {/* Account */}
      <View style={styles.account}>
        <View style={styles.accountContainer}>
          <View style={styles.visa}>
            <Image
              style={styles.visaIcon}
              source={require("../../../assets/images/visa-logo.png")}
            />
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.accountInfoText}>Visa</Text>
            <Text style={styles.accountInfoAmount}>$ 5,200</Text>
          </View>
        </View>

        <View style={styles.accountNumber}>
          <Text style={styles.accountNumberText}>** 5534</Text>
        </View>
      </View>

      {/* Buttons */}
      <LinearGradient
        style={styles.buttons}
        colors={["#FCFFDF", COLORS.yellow]}
      >
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.buttonsText}>Send</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Numpad */}
      <View style={styles.numpad}>
        <View style={styles.numpadRow}>
          {numbers.map((number, index) => (
            <TouchableOpacity
              style={[
                styles.numPadButton,
                {
                  justifyContent: number.number === "0" && "center",
                },
              ]}
              onPress={() => setAmount(amount + number.number)}
              key={index}
            >
              <Text style={styles.numPadButtonText}>{number.number}</Text>
              <Text style={styles.numPadButtonLetter}>{number.letters}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[
              styles.numPadButton,
              {
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
            onPress={() => {
              setAmount(amount.toString().slice(0, -1));
            }}
          >
            <Icon name="close-circle" size={40} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TransferView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cancelWrapper: {
    position: "absolute",
    left: 5,
    backgroundColor: "#363339",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  cancelButton: {
    color: COLORS.white,
    fontSize: 16,
  },
  contactsPreviewItemImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  name: {
    color: COLORS.white,
    marginTop: 8,
    fontSize: 18,
  },
  textInput: {
    marginTop: 10,
    backgroundColor: COLORS.graySecondary,
    width: "80%",
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputText: {
    fontSize: 28,
    color: COLORS.white,
  },
  account: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 50,
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  visa: {
    width: 52,
    height: 52,
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
  },
  visaIcon: {
    width: 52,
    height: 52,
    resizeMode: "contain",
  },
  accountInfo: {
    marginLeft: 20,
  },
  accountInfoText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "500",
  },
  accountInfoAmount: {
    fontSize: 14,
    color: "gray",
    paddingTop: 6,
  },
  accountNumber: {
    backgroundColor: "#363339",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  accountNumberText: {
    color: COLORS.white,
  },
  buttons: {
    marginTop: 30,
    backgroundColor: COLORS.yellow,
    width: "110%",
    paddingVertical: 17,
    borderRadius: 25,
  },
  buttonsText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  numpad: {
    marginTop: 22,
  },
  numpadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  numPadButton: {
    backgroundColor: "#363339",
    width: "30%",
    height: 65,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 8,
  },
  numPadButtonText: {
    color: COLORS.white,
    fontSize: 32,
    marginTop: 4,
  },
  numPadButtonLetter: {
    color: "lightgray",
    fontSize: 12,
  },
});
