import React from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

const DATA = [
  {
    id: "1",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "2",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "3",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "4",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "5",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "6",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "7",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "8",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "9",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "10",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "11",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
  {
    id: "12",
    title: "Play & Win",
    subTitle: "21.6",
    half: "1/4",
    date: "4 Mar 2021",
    time: "11:26",
    description: "Gain",
  },
];

function History(props) {
  const renderItem = ({ item }) => (
    <View>
      <View
        style={{
          backgroundColor: "white",
          width: wp("85%"),
          height: hp("15%"),
          alignSelf: "center",
          marginVertical: 6,
          flexDirection: "row",
          justifyContent: "space-between",
          elevation: 3,
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("25%"),
            height: hp("15%"),
            justifyContent: "center",
          }}
        >
          <Text style={{ marginLeft: 15 }}>{item.title}</Text>
        </View>
        <View
          style={{
            //  backgroundColor: "cyan",
            width: wp("20%"),
            height: hp("15%"),
          }}
        >
          <View
            style={{
              // backgroundColor: "green",
              width: wp("20%"),
              height: hp("7.5%"),
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                //  backgroundColor: "red",
                width: wp("4%"),
                height: hp("7.5%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: wp("3%"), height: hp("3%") }}
                source={require("../assets/arrow.png")}
              />
            </View>
            <View
              style={{
                //  backgroundColor: "yellow",
                width: wp("7%"),
                height: hp("7.5%"),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 10 }}>{item.subTitle}</Text>
            </View>
            <View
              style={{
                //  backgroundColor: "cyan",
                width: wp("4%"),
                height: hp("7.5%"),
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: wp("3%"),
                  height: hp("3%"),
                  alignSelf: "center",
                }}
                source={require("../assets/coin.png")}
              />
            </View>
          </View>
          <View
            style={{
              //backgroundColor: "orange",
              width: wp("20%"),
              height: hp("7.5%"),
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                // backgroundColor: "lightgreen",
                width: wp("2%"),
                height: hp("7.5%"),
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: wp("1%"),
                  height: hp("3%"),
                  alignSelf: "center",
                }}
                source={require("../assets/medall.png")}
              />
            </View>
            <View
              style={{
                // backgroundColor: "lightblue",
                width: wp("6%"),
                height: hp("7.5%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10 }}>{item.half}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: "purple",
            width: wp("25%"),
            height: hp("15%"),
            marginRight: 15,
          }}
        >
          <View
            style={{
              // backgroundColor: "pink",
              width: wp("23%"),
              height: hp("7.5%"),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                //  backgroundColor: "yellow",
                width: wp("17%"),
                height: hp("7.5%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10 }}>{item.date}</Text>
            </View>
            <View
              style={{
                //  backgroundColor: "blue",
                width: wp("8%"),
                height: hp("7.5%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10 }}>{item.time}</Text>
            </View>
          </View>
          <View
            style={{
              //  backgroundColor: "white",
              width: wp("25%"),
              height: hp("7.5%"),
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 16, alignSelf: "center", color: "#008000" }}
            >
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: "#f2f2f2",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#ffece5",
          width: wp("95%"),
          height: hp("175%"),
          alignSelf: "center",
          marginTop: 70,
          borderRadius: 15,
          elevation: 3,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ff8b2c",
            width: wp("90%"),
            height: hp("14%"),
            alignSelf: "center",
            borderRadius: 15,
            marginTop: -30,
            justifyContent: "center",
            elevation: 3,
          }}
        >
          <Text style={{ alignSelf: "center", color: "white", fontSize: 22 }}>
            Game History
          </Text>
        </TouchableOpacity>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default History;
