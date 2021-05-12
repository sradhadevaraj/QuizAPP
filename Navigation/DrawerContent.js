import React from "react";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Dimensions, Image } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const window = Dimensions.get("window");
const windowwidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

function DrawerContent({ navigation }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View
          style={{
            // backgroundColor: "violet",
            width: wp("17%"),
            height: hp("17%"),
            marginLeft: 20,
            marginTop: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "lightgreen",
              width: 65,
              height: 65,
              borderRadius: 30,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 30 }}
              source={require("../assets/prof.jpg")}
            ></Image>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("40%"),
              height: hp("15%"),
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Noah Flynn</Text>
            <Image
              style={{
                width: wp("27%"),
                height: hp("4%"),
                marginTop: 5,
              }}
              source={require("../assets/star-01.png")}
            />
          </View>
        </View>
        <View
          style={{
            //backgroundColor: "yellow",
            width: wp("20%"),
            height: hp("4%"),
            marginTop: 90,
            flexDirection: "row",
            marginLeft: 20,
          }}
        >
          <View
            style={{
              //  backgroundColor: "green",
              width: wp("8%"),
              height: hp("4%"),
            }}
          >
            <Text style={{ fontWeight: "bold" }}>779</Text>
          </View>
          <View
            style={{
              // backgroundColor: "violet",
              width: wp("10%"),
              height: hp("4%"),
            }}
          >
            <Text style={{ color: "grey" }}>Coins</Text>
          </View>
        </View>
        <DrawerItem
          style={{ marginTop: 30, marginLeft: 10 }}
          labelStyle={{ fontSize: 17 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Home"
          onPress={() => navigation.navigate("Home")}
        />
        <DrawerItem
          style={{ marginLeft: 10 }}
          labelStyle={{ fontSize: 17 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="refresh" color={color} size={size} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Game History"
          onPress={() => navigation.navigate("History")}
        />
        <DrawerItem
          style={{ marginLeft: 10 }}
          labelStyle={{ fontSize: 17 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="My Schedules"
          onPress={() => navigation.navigate("PlayWin")}
        />
        <DrawerItem
          style={{ marginLeft: 10 }}
          labelStyle={{ fontSize: 17 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="cash" color={color} size={size} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Wallet"
          onPress={() => navigation.navigate("Wallet")}
        />
        <DrawerItem
          style={{ marginLeft: 10 }}
          labelStyle={{ fontSize: 17 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color}
              size={size}
            />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Invite Friends"
          onPress={() => navigation.navigate("Wallet")}
        />
        <DrawerItem
          style={{ marginLeft: 10 }}
          labelStyle={{ fontSize: 17 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Leaderboard"
          onPress={() => navigation.navigate("Winners")}
        />
        <DrawerItem
          style={{ marginLeft: 10 }}
          labelStyle={{ fontSize: 17 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <DrawerItem
          style={{ marginLeft: 10 }}
          labelStyle={{ fontSize: 17 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Rules"
          onPress={() => navigation.navigate("Rules")}
        />

        <DrawerItem
          style={{ marginLeft: 10 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="attachment"
              color={color}
              size={size}
            />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Buy Coins"
          onPress={() => navigation.navigate("BuyCoins")}
        />

        <DrawerItem
          style={{ marginBottom: 10 }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Log out"
          onPress={() => navigation.navigate("Register")}
        />
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;
