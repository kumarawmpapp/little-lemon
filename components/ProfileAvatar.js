import { useEffect, useState,  } from "react";
import {
  Text,
  View,
  StyleSheet,
  
  Alert,
  Image,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../theme";

const ProfileAvatar = ({onPress}) => {
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
  
    return <Pressable
      style={styles.avatar}
      onPress={onPress}
    >
      {profile.image !== "" ? (
        <Image source={{ uri: profile.image }} style={styles.avatarImage} />
      ) : (
        <View style={styles.avatarEmpty}>
          <Text style={styles.avatarEmptyText}>
            {profile.firstName && profile.firstName.charAt(0)}
            {profile.lastName && profile.lastName.charAt(0)}
          </Text>
        </View>
      )}
    </Pressable>;
  };

  const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      avatarImage: {
        resizeMode: "contain"
      },
      avatarEmpty: {
        backgroundColor: Colors.secondary4,
        alignItems: "center",
        justifyContent: "center",
      },
    });

    export default ProfileAvatar;