import React from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function PlayWin({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#F2F2F2",
        flex: 1,
        marginTop: 30,
      }}
    >
      <View
        style={{
          // backgroundColor: "red",
          width: wp("16%"),
          height: hp("6%"),
          alignSelf: "flex-end",
          marginRight: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("6%"),
            height: hp("6%"),
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/coin.png")}
          />
        </View>
        <Text style={{ fontSize: 16 }}>779</Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          width: wp("55%"),
          height: hp("43%"),
          alignSelf: "center",
          marginTop: 5,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/bluestar.png")}
        />
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("55%"),
          height: hp("10%"),
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ alignSelf: "center", fontSize: 22, fontWeight: "bold" }}>
          Upcoming Games
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#D3D3D3",
          width: wp("90%"),
          height: hp("128%"),
          alignSelf: "center",
          marginTop: 15,
          borderRadius: 20,
          elevation: 3,
        }}
      >
        <View
          style={{
            backgroundColor: "pink",
            width: wp("65%"),
            height: hp("55%"),
            alignSelf: "center",
            marginTop: 100,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/data.png")}
          />
        </View>
        <View
          style={{
            // backgroundColor: "red",
            width: wp("25%"),
            height: hp("6%"),
            alignSelf: "center",
            marginTop: 80,
          }}
        >
          <Text style={{ color: "grey" }}>No data found</Text>
        </View>
      </View>
    </View>
  );
}

export default PlayWin;
