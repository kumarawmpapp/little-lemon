import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, Image, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../theme";

const ProfileAvatar = ({ onPress }) => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    orderStatuses: false,
    passwordChanges: false,
    specialOffers: false,
    newsletter: false,
    image: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const getProfile = await AsyncStorage.getItem("profile");
        setProfile(JSON.parse(getProfile));
      } catch (e) {
        Alert.alert(e.message);
      }
    })();
  }, []);

  const firstChar = profile.firstName ? Array.from(profile.firstName)[0] : '';
  const secondChar = profile.lastName ? Array.from(profile.lastName)[0] : '';

  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
    >
      <View style={[styles.avatar, styles.circle]}>
        {profile.image !== "" ? (
          <Image source={{ uri: profile.image }} style={styles.avatarImage} />
        ) : (
          // <View style={[styles.avatarEmpty]}>
          <Text style={styles.avatarEmptyText}>
            {firstChar+secondChar}
          </Text>
          // </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Colors.primary1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarImage: {
    resizeMode: "contain",
  },
  avatarEmpty: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarEmptyText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ProfileAvatar;
