import { View, Text, Image, StyleSheet } from "react-native";
import { Colors, Fonts } from "../theme";


const CompanyDescription = 
(props) => {
  return <View style={styles.heroSection}>
    <Text style={styles.heroHeader}>Little Lemon</Text>
    <View style={styles.heroBody}>
      <View style={styles.heroContent}>
        <Text style={styles.heroHeader2}>Chicago</Text>
        <Text style={styles.heroText}>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </Text>
      </View>
      <Image
        style={styles.heroImage}
        source={require("../assets/Hero image.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon Food"} />
    </View>
    {props.children}

  </View>;
};

const styles = StyleSheet.create({
    heroSection: {
        backgroundColor: "#495e57",
        padding: 15,
      },
      heroHeader: {
        fontFamily: "MarkaziText-Regular",
        color: Colors.primary2,
        fontSize: 54,
      },
      heroHeader2: {
        color: "#fff",
        fontSize: 30,
      },
      heroText: {
        color: "#fff",
        fontSize: 14,
      },
      heroBody: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      heroContent: {
        flex: 1,
      },
      heroImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
      },
    });

export default CompanyDescription;