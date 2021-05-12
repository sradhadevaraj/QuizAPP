import React from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Winners({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#f7f7f8",
        flex: 1,
        marginTop: 30,
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          width: wp("55%"),
          height: hp("45%"),
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/troph.png")}
        />
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("90%"),
          height: hp("10%"),
          alignSelf: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#ff4500",
            width: wp("20%"),
            height: hp("9%"),
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "white" }}>Daily</Text>
        </View>
        <View
          style={{
            backgroundColor: "#bbb9ba",
            width: wp("20%"),
            height: hp("9%"),
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "white" }}>Weekly</Text>
        </View>
        <View
          style={{
            backgroundColor: "#bbb9ba",
            width: wp("20%"),
            height: hp("9%"),
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "white" }}>Monthly</Text>
        </View>
        <View
          style={{
            backgroundColor: "#bbb9ba",
            width: wp("20%"),
            height: hp("9%"),
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "white" }}>All Time</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#f1e9e8",
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
            source={require("../assets/check.png")}
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

export default Winners;
