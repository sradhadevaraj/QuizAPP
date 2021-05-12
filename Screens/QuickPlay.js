import React from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

const DATA = [
  {
    id: "1",
    title: "Prize pool",
    subTitle: "Entry:",
    description: "Join",
    rate: "20 Coins",
    spot: "2 spots",
    point: "10",
  },
  {
    id: "2",
    title: "Prize pool",
    subTitle: "Entry:",
    description: "Join",
    rate: "30 Coins",
    spot: "3 spots",
    point: "10",
  },
  {
    id: "3",
    title: "Prize pool",
    subTitle: "Entry:",
    description: "Join",
    rate: "40 Coins",
    spot: "4 spots",
    point: "10",
  },
  {
    id: "4",
    title: "Prize pool",
    subTitle: "Entry:",
    description: "Join",
    rate: "30 Coins",
    spot: "2 spots",
    point: "15",
  },
  {
    id: "5",
    title: "Prize pool",
    subTitle: "Entry:",
    description: "Join",
    rate: "45 Coins",
    spot: "3 spots",
    point: "15",
  },
  {
    id: "6",
    title: "Prize pool",
    subTitle: "Entry:",
    description: "Join",
    rate: "14 Coins",
    spot: "2 spots",
    point: "7",
  },
  {
    id: "7",
    title: "Prize pool",
    subTitle: "Entry:",
    description: "Join",
    rate: "120 Coins",
    spot: "6 spots",
    point: "20",
  },
  {
    id: "8",
    title: "Prize pool",
    subTitle: "Entry:",
    description: "Join",
    rate: "100 Coins",
    spot: "5 spots",
    point: "20",
  },
];

function QuickPlay({ navigation }) {
  const renderItem = ({ item }) => (
    <View>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          width: wp("80%"),
          height: hp("28%"),
          alignSelf: "center",
          marginTop: 15,

          marginVertical: 5,
          borderRadius: 10,
          elevation: 3,
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("75%"),
            height: hp("8%"),
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#9C9C9C" }}>{item.title}</Text>
          <View
            style={{
              // backgroundColor: "red",
              width: wp("22%"),
              height: hp("8%"),
              alignSelf: "flex-end",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                // backgroundColor: "violet",
                width: wp("10%"),
                height: hp("8%"),
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#9C9C9C" }}>{item.subTitle}</Text>
            </View>
            <View
              style={{
                // backgroundColor: "green",
                width: wp("4%"),
                height: hp("4%"),
                marginLeft: 4,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/coin.png")}
              />
            </View>
            <View
              style={{
                // backgroundColor: "blue",
                width: wp("8%"),
                height: hp("8%"),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{item.point}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("75%"),
            height: hp("10%"),
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // backgroundColor: "green",
              width: wp("25%"),
              height: hp("13%"),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                // backgroundColor: "pink",
                width: wp("6%"),
                height: hp("6%"),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/coin.png")}
              />
            </View>
            <View
              style={{
                // backgroundColor: "violet",
                width: wp("30%"),
                height: hp("13%"),
                justifyContent: "center",
                marginLeft: 5,
              }}
            >
              <Text style={{ fontSize: 22 }}>{item.rate}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#F16969",
              width: wp("23%"),
              height: hp("8%"),
              borderRadius: 6,
              justifyContent: "center",
            }}
          >
            <Text style={{ alignSelf: "center", color: "white" }}>
              {item.description}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("13%"),
            height: hp("8%"),
            alignSelf: "flex-end",
            justifyContent: "center",
            marginRight: 15,
            marginTop: 6,
          }}
        >
          <Text>{item.spot}</Text>
        </View>
      </View>
    </View>
  );
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
          height: hp("45%"),
          alignSelf: "center",
          marginTop: 5,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/qickplay.png")}
        />
      </View>
      <View
        style={{
          backgroundColor: "#D3D3D3",
          width: wp("90%"),
          height: hp("128%"),
          alignSelf: "center",
          marginTop: 20,
          borderRadius: 20,
        }}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default QuickPlay;
