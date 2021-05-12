import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

const DATA = [
  {
    id: "1",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit.Sed ut perspi....",
    img: require("../assets/border.png"),
  },
  {
    id: "2",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit....",
    img: require("../assets/border.png"),
  },
  {
    id: "3",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit.Sed ut perspi....",
    img: require("../assets/border.png"),
  },
  {
    id: "4",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit....",
    img: require("../assets/border.png"),
  },
  {
    id: "5",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit....",
    img: require("../assets/border.png"),
  },
  {
    id: "6",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit.Sed ut perspi....",
    img: require("../assets/border.png"),
  },
  {
    id: "7",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit....",
    img: require("../assets/border.png"),
  },
  {
    id: "8",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit....",
    img: require("../assets/border.png"),
  },
  {
    id: "9",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit.Sed ut perspi....",
    img: require("../assets/border.png"),
  },
  {
    id: "10",
    date: "4/3/2021",
    time: "11:26",
    title: "Twenty 20 Game : Today.....",
    subTitle: "Sed ut perspiciatis unde error visit....",
    img: require("../assets/border.png"),
  },
];

function Notification(props) {
  const renderItem = ({ item }) => (
    <View>
      <View
        style={{
          backgroundColor: "white",
          width: wp("85%"),
          height: hp("25%"),
          alignSelf: "center",
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          elevation: 3,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("25%"),
            height: hp("25%"),
            padding: 5,
            borderRadius: 20,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/border.png")}
          />
        </View>
        <View
          style={{
            // backgroundColor: "green",
            width: wp("60%"),
            height: hp("25%"),
          }}
        >
          <View
            style={{
              //  backgroundColor: "yellow",
              width: wp("30%"),
              height: hp("7%"),
              alignSelf: "flex-end",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                // backgroundColor: "lightblue",
                width: wp("15%"),
                height: hp("7%"),
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 12, alignSelf: "center" }}>
                {item.date}
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: "lightgreen",
                width: wp("15%"),
                height: hp("7%"),
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 12, alignSelf: "center" }}>
                {item.time}
              </Text>
            </View>
          </View>
          <View
            style={{
              //  backgroundColor: "yellow",
              width: wp("60%"),
              height: hp("6%"),
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.title}
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "yellow",
              width: wp("55%"),
              height: hp("10%"),
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>{item.subTitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: "#ffece5",
        flex: 1,
      }}
    >
      <LinearGradient
        style={{
          width: wp("100%"),
          height: hp("45%"),
          alignSelf: "center",
          marginTop: 30,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        colors={["#c75d2b", "#d27633", "#e39c40", "#eeb949"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.4 }}
      >
        <View
          style={{
            // backgroundColor: "red",
            width: wp("52%"),
            height: hp("15%"),
            marginTop: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 15,
          }}
        >
          <MaterialCommunityIcons name="bell" size={30} color="white" />
          <Text style={{ color: "white", fontSize: 26 }}>Notifications</Text>
        </View>
      </LinearGradient>
      <View
        style={{
          // backgroundColor: "red",
          width: wp("90%"),
          height: hp("160%"),
          alignSelf: "center",
          marginTop: -50,
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

export default Notification;
