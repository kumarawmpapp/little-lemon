import React, { useLayoutEffect, useState } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import { Colors } from "../theme";
const LogoTitle = (props) => {
  // let backButton = null;
  const [leftButton, setLeftButton] = useState();
  const [rightButton, setRightButton] = useState();
  // let rightButton = null;

  useLayoutEffect(() => {
    if (props.navigation.canGoBack()) {
      const backButton = (
        <Pressable onPress={props.navigation.goBack}>
          <BackIcon />
        </Pressable>
      );
      setLeftButton(backButton);
    }
  }, [props.back]);

  useLayoutEffect(() => {
    const headerRight = props.options.headerRight;

    if (typeof headerRight === "function") {
      setRightButton(headerRight());
      // rightButton = headerRight();
    }
  }, [props.options.headerRight]);

  return (
    <View style={styles.header}>
      <View style={styles.leftView}>{leftButton}</View>
      <View style={styles.titleView}>
        <TitleImage />
      </View>
      <View style={styles.rightView}>{rightButton}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // height: 100,
    // marginBottom: -120,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.secondary3,
  },
  leftView: {
    // flex: 1,
    width: "30%",
    alignItems: "flex-start",
    // backgroundColor: Colors.secondary1
  },
  titleView: {
    // flex: 1,
    alignItems: "center",
    width: "30%",
    // backgroundColor: Colors.secondary2
  },
  rightView: {
    // flex: 1,
    width: "30%",
    alignItems: "flex-end",
    // backgroundColor: Colors.secondary1
  },
  logo: {
    // width: 150,
    resizeMode: "contain",
  },
});

export default LogoTitle;

export function TitleImage() {
  return (
    <Image
      style={styles.logo}
      source={require("../assets/Logo.png")}
      accessible={true}
      accessibilityLabel="Little Lemon Logo"
    />
  );
}

export function BackIcon() {
  return (
    <Image
      style={{ resizeMode: "contain", height: 40, width: 40 }}
      source={require("../assets/back-icon.png")}
    />
  );
}
