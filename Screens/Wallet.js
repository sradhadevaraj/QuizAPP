import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

const DATA = [
  {
    id: "1",
    date: "4/3/2021",
    time: "11:26",
    title: "Play & Win",
    subTitle: "+21.6",
  },
  {
    id: "2",
    date: "4/3/2021",
    time: "11:26",
    title: "Entry Fee",
    subTitle: "+21.6",
  },
  {
    id: "3",
    date: "4/3/2021",
    time: "11:26",
    title: "Play & Win",
    subTitle: "+21.6",
  },
  {
    id: "4",
    date: "4/3/2021",
    time: "11:26",
    title: "Entry Fee",
    subTitle: "+21.6",
  },
  {
    id: "5",
    date: "4/3/2021",
    time: "11:26",
    title: "Play with Friends",
    subTitle: "+21.6",
  },
  {
    id: "6",
    date: "4/3/2021",
    time: "11:26",
    title: "Play & Win",
    subTitle: "+21.6",
  },
  {
    id: "7",
    date: "4/3/2021",
    time: "11:26",
    title: "Play & Win",
    subTitle: "+21.6",
  },
  {
    id: "8",
    date: "4/3/2021",
    time: "11:26",
    title: "Play & Win",
    subTitle: "+21.6",
  },
  {
    id: "9",
    date: "4/3/2021",
    time: "11:26",
    title: "Play & Win",
    subTitle: "+21.6",
  },
  {
    id: "10",
    date: "4/3/2021",
    time: "11:26",
    title: "Play & Win",
    subTitle: "+21.6",
  },
  {
    id: "11",
    date: "4/3/2021",
    time: "11:26",
    title: "Play & Win",
    subTitle: "+21.6",
  },
];

function Wallet(props) {
  const renderItem = ({ item }) => (
    <View>
      <View
        style={{
          backgroundColor: "white",
          width: wp("85%"),
          height: hp("15%"),
          alignSelf: "center",
          marginTop: 3,
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          elevation: 3,
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("20%"),
            height: hp("15%"),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 10 }}>{item.date}</Text>
          <Text style={{ fontSize: 10 }}>{item.time}</Text>
        </View>
        <View
          style={{
            //  backgroundColor: "cyan",
            width: wp("40%"),
            height: hp("15%"),
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center" }}>{item.title}</Text>
        </View>
        <View
          style={{
            // backgroundColor: "violet",
            width: wp("20%"),
            height: hp("15%"),
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "green",
            }}
          >
            {item.subTitle}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: "#f6f6f6",
        flex: 1,
      }}
    >
      <LinearGradient
        style={{
          width: wp("80%"),
          height: hp("43%"),
          alignSelf: "center",
          marginTop: 40,
          borderRadius: 40,
          justifyContent: "center",
        }}
        colors={["#faa643", "#f67138", "#ef3e2c", "#ee2e29"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.4 }}
      >
        <View
          style={{
            //  backgroundColor: "yellow",
            width: wp("40%"),
            height: hp("20%"),
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // backgroundColor: "violet",
              width: wp("12%"),
              height: hp("12%"),
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/coin.png")}
            />
          </View>
          <View
            style={{
              //backgroundColor: "pink",
              width: wp("25%"),
              height: hp("20%"),
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 48, alignSelf: "center" }}>
              779
            </Text>
          </View>
        </View>
      </LinearGradient>

      <View
        style={{
          backgroundColor: "#ffece5",
          width: wp("90%"),
          height: hp("130%"),
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            // backgroundColor: "violet",
            width: wp("90%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: -12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fea500",
              width: wp("42%"),
              height: hp("10%"),
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <Text style={{ alignSelf: "center", color: "white" }}>
              Share Referal Code
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#99cb48",
              width: wp("42%"),
              height: hp("10%"),
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <Text style={{ alignSelf: "center", color: "white" }}>
              Buy Coins
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            // backgroundColor: "cyan",
            width: wp("90%"),
            height: hp("10%"),
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              // backgroundColor: "yellow",
              width: wp("30%"),
              height: hp("10%"),
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 16,
              }}
            >
              Date
            </Text>
          </View>
          <View
            style={{
              //  backgroundColor: "blue",
              width: wp("30%"),
              height: hp("10%"),
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 16,
              }}
            >
              Quiz Type
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "orange",
              width: wp("30%"),
              height: hp("10%"),
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 16,
              }}
            >
              Gain/Loss
            </Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default Wallet;
