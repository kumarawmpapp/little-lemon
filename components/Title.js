import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
const LogoTitle = () => {
  return (
    <View style={styles.header}>
        <Image
      source={require("../assets/Logo.png")}
      accessible={true}
      accessibilityLabel="Little Lemon Logo"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#dee3e9",
    paddingTop: Constants.statusBarHeight,
    height: 80
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  }
});

export default LogoTitle;
