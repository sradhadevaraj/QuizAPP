import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screens/Home";
import Wallet from "../Screens/Wallet";
import Winners from "../Screens/Winners";
import Profile from "../Screens/Profile";

const Tab = createBottomTabNavigator();

function HomeStack(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#FFAA00",
        activeTintColor: "#FAF9F6",
        inactiveBackgroundColor: "#ffff",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="Wallet" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Winners"
        component={Winners}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="Wallet" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeStack;
