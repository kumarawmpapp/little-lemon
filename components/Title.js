import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
const LogoTitle = (props) => {
  const headerRight = props.options.headerRight;
 
    console.log(props.options.headerLeft);
 

  
  
  return (
    <View style={styles.header}>
        <Image
        style={styles.logo}
      source={require("../assets/Logo.png")}
      accessible={true}
      accessibilityLabel="Little Lemon Logo"
        />
        {(typeof headerRight === 'function') && headerRight()}
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  logo: {
    // width: 150,
    resizeMode: "contain",
  }
});

export default LogoTitle;
