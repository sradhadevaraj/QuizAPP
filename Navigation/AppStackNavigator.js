import React from "react";
import { View, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const window = Dimensions.get("window");
const windowwidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

import HomeStack from "../Navigation/HomeStack";
import Home from "../Screens/Home";
import QuickPlay from "../Screens/QuickPlay";
import HeadtoHead from "../Screens/HeadtoHead";
import Playwithfriends from "../Screens/Playwithfriends";
import PlayWin from "../Screens/PlayWin";
import Profile from "../Screens/Profile";
import Wallet from "../Screens/Wallet";
import Winners from "../Screens/Winners";
import BuyCoins from "../Screens/BuyCoins";
import History from "../Screens/History";
import Notification from "../Screens/Notification";
import Register from "../Screens/Register";
import Rules from "../Screens/Rules";

const Stack = createStackNavigator();

function AppStackNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />

      <Stack.Screen
        name="QuickPlay"
        component={QuickPlay}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="HeadtoHead"
        component={HeadtoHead}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="Playwithfriends"
        component={Playwithfriends}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="PlayWin"
        component={PlayWin}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="Winners"
        component={Winners}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="BuyCoins"
        component={BuyCoins}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />

      <Stack.Screen
        name="Rules"
        component={Rules}
        options={({ navigation }) => {
          return {
            headerTitle: "",
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;
