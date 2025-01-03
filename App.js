import { useEffect, useMemo, useReducer, useCallback } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SQLiteDatabase, SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import Onboarding from "./screens/Onboarding";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import LogoTitle, { BackIcon, TitleImage } from "./components/Title";
import { AuthContext } from "./contexts/AuthContext";
import { Colors, Fonts } from "./theme";

const navTheme = DefaultTheme;
navTheme.colors.background = Colors.secondary3;
navTheme.colors.card = Colors.secondary3;
navTheme.fonts.regular.fontFamily = Fonts.Karla;

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "onboard":
          return {
            ...prevState,
            isLoading: false,
            isOnboardingCompleted: action.isOnboardingCompleted,
          };
      }
    },
    {
      isLoading: true,
      isOnboardingCompleted: false,
    }
  );

  useEffect(() => {
    (async () => {
      let profileData = [];
      try {
        const getProfile = await AsyncStorage.getItem("profile");
        if (getProfile !== null) {
          profileData = getProfile;
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (Object.keys(profileData).length != 0) {
          dispatch({ type: "onboard", isOnboardingCompleted: true });
        } else {
          dispatch({ type: "onboard", isOnboardingCompleted: false });
        }
      }
    })();
  }, []);

  const authContext = useMemo(
    () => ({
      onboard: async data => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem("profile", jsonValue);
        } catch (e) {
          console.error(e);
        }

        dispatch({ type: "onboard", isOnboardingCompleted: true });
      },
      update: async data => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem("profile", jsonValue);
        } catch (e) {
          console.error(e);
        }

        Alert.alert("Success", "Successfully saved changes!");
      },
      logout: async () => {
        try {
          await AsyncStorage.clear();
        } catch (e) {
          console.error(e);
        }

        dispatch({ type: "onboard", isOnboardingCompleted: false });
      },
    }),
    []
  );

  const createDbIfNeeded = async (db) => {
    await db.execAsync("create table if not exists menuitems (id integer primary key not null, name text, price text, description text, image text, category text);");
  };

  return (
    <AuthContext.Provider value={authContext}>
            <SQLiteProvider databaseName="little_lemon.db" onInit={createDbIfNeeded}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions = 

{{
  headerStyle: {
    backgroundColor: Colors.secondary3,
    height: 100,
    
  },
  headerTintColor: Colors.primary1,    
  headerTitle: (props) => <TitleImage/>,
  // header: (props) => <LogoTitle {...props}/>,
  headerBackButtonDisplayMode: "minimal",
  // headerBackImageSource: require("./assets/back-icon.png"),
}}>
          {state.isOnboardingCompleted ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
              />
              <Stack.Screen name="Profile" component={Profile} />
            </>
          ) : (
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      </SQLiteProvider>
    </AuthContext.Provider>
  );
}