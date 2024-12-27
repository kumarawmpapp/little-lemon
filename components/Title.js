import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import { Colors } from "../theme";
const LogoTitle = (props) => {

  let backButton = null;
  // const [rightButton, setRightButton] = useState();
  let rightButton = null;

  useEffect(() => {
    if (props.navigation.canGoBack()) 
      backButton =
      <Pressable onPress={props.navigation.goBack()}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: Colors.primary1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 25, fontWeight: "700" }}>
            ←
          </Text>
        </View>
      </Pressable>;
  }, [props.back]);

  // useEffect(() => {
    const headerRight = props.options.headerRight;

    if (typeof headerRight === "function" ) {
      // setRightButton(headerRight());
      rightButton = headerRight();
    }
    
  // }, [props.options.headerRight]);
  
  console.log(rightButton);
  

  return (
    <View style={styles.header}>
      {backButton}

      <Image
        style={styles.logo}
        source={require("../assets/Logo.png")}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.secondary3
  },
  logo: {
    // width: 150,
    resizeMode: "contain",
  },
});

export default LogoTitle;
