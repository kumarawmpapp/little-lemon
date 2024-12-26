import React, { useState, useRef, useContext, useCallback } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
  ScrollView
} from "react-native";
import { validateEmail, validateName } from "../utils";
import Constants from "expo-constants";

import { AuthContext } from "../contexts/AuthContext";
import CompanyDescription from "../components/CompanyDescription";
import { Colors } from "../theme";

const Onboarding = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");

  const isEmailValid = validateEmail(email);
  const isFirstNameValid = validateName(firstName);

  const isSubmitEnabled = isFirstNameValid && isEmailValid;

  const { onboard } = useContext(AuthContext);


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      
      
      <ScrollView
        style={styles.scrollView}
      >
        <CompanyDescription>      <Text style={styles.welcomeText}>Let us get to know you</Text>
        </CompanyDescription>
        
          <View style={styles.pageContainer}>
            <Text style={styles.text}>First Name*</Text>
            <TextInput
              style={styles.inputBox}
              value={firstName}
              onChangeText={onChangeFirstName}
              placeholder={"First Name"}
            />
          </View>


       
          <View style={styles.pageContainer}>
            <Text style={styles.text}>Last Name</Text>
            <TextInput
              style={styles.inputBox}
              value={lastName}
              onChangeText={onChangeLastName}
              placeholder={"Last Name"}
            />
          </View>



       
          <View style={styles.pageContainer}>
            <Text style={styles.text}>Email*</Text>
            <TextInput
              style={styles.inputBox}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={"Email"}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.buttons}>

            <Pressable
              style={[styles.halfBtn, isSubmitEnabled ? "" : styles.btnDisabled]}
              onPress={() => onboard({ firstName, lastName, email })}
              disabled={!isSubmitEnabled}
            >
              <Text style={styles.btntext}>Next</Text>
            </Pressable>
          </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1
  },
  page: {
    //justifyContent: "center",
  },
  pageContainer: {
    paddingTop:20,
    paddingHorizontal: 20
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  welcomeText: {
    fontSize: 30,
    color: Colors.secondary3,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary1,
  },
  inputBox: {
    borderColor: "#EDEFEE",
    alignSelf: "stretch",
    height: 50,
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 9,
  },
  btn: {
    backgroundColor: "#f4ce14",
    borderColor: "#f4ce14",
    borderRadius: 9,
    alignSelf: "stretch",
    marginHorizontal: 18,
    marginBottom: 60,
    padding: 10,
    borderWidth: 1,
  },
  btnDisabled: {
    backgroundColor: "#f1f4f7",
  },
  buttons: {

    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // marginLeft: 18,
    // marginBottom: 60,
  },
  halfBtn: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderColor: "#f4ce14",
    backgroundColor: "#f4ce14",
    borderRadius: 9,
    // alignSelf: "stretch",
    marginRight: 18,
    padding: 10,
    borderWidth: 1,
  },
  btntext: {
    fontSize: 22,
    color: "#333",
    alignSelf: "center",
  },
  pageIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  pageDot: {
    backgroundColor: "#67788a",
    width: 22,
    height: 22,
    marginHorizontal: 10,
    borderRadius: 11,
  },
  pageDotActive: {
    backgroundColor: "#f4ce14",
    width: 22,
    height: 22,
    borderRadius: 11,
  },
});

export default Onboarding;
