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
        backgroundColor: Colors.primary1,
        padding: 15,
      },
      heroHeader: {
        fontFamily: Fonts.Markazi,
        color: Colors.primary2,
        fontSize: 54,
      },
      heroHeader2: {
        color: Colors.secondary3,
        fontSize: 30,
      },
      heroText: {
        color: Colors.secondary3,
        fontSize: 20,
        paddingVertical: 20
      },
      heroBody: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      heroContent: {
        flex: 1,
      },
      heroImage: {
        width: 150,
        height: 150,
        borderRadius: 12,
        padding: 10,
      },
    });

export default CompanyDescription;