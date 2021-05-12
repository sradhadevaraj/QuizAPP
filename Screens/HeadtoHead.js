import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HeadtoHead({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#F2F2F2",
        flex: 1,
        marginTop: 30,
      }}
    >
      {/* <ImageBackground
        style={{
          width: wp("100%"),
          height: hp("100%"),
        }}
        source={require("../assets/star.png")}
      > */}
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
          width: wp("60%"),
          height: hp("40%"),
          alignSelf: "center",
          marginTop: 50,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/gameon.png")}
        />
      </View>
      <View
        style={{
          backgroundColor: "#A3CE52",
          width: wp("100%"),
          height: hp("140%"),
          marginTop: 50,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("90%"),
            height: hp("10%"),
            alignSelf: "center",
            marginTop: 18,

            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: wp("10%"),
              height: hp("10%"),
              alignSelf: "flex-start",
              marginLeft: 10,
            }}
            source={require("../assets/iconn.png")}
          />
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontSize: 22,
              marginLeft: 70,
              fontWeight: "bold",
            }}
          >
            Language
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#ABD25B",
            width: wp("85%"),
            height: hp("10%"),
            alignSelf: "center",
            marginTop: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#808080",
              width: wp("42%"),
              height: hp("10%"),
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderColor: "white",
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>
              Malayalam
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: wp("42%"),
              height: hp("10%"),
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderColor: "white",
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ alignSelf: "center" }}>English</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            //  backgroundColor: "red",
            width: wp("42%"),
            height: hp("8%"),
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ alignSelf: "center", color: "white", fontSize: 20 }}>
            Coins Required
          </Text>
        </View>
        <View
          style={{
            //  backgroundColor: "violet",
            width: wp("60%"),
            height: hp("20%"),
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              width: wp("20%"),
              height: hp("20%"),
              borderRadius: 40,

              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              style={{ alignSelf: "center" }}
              name="less-than"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <View
            style={{
              // backgroundColor: "pink",
              width: wp("15%"),
              height: hp("15%"),
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{ alignSelf: "center", fontSize: 35, color: "#F3F90A" }}
            >
              10
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              width: wp("20%"),
              height: hp("20%"),
              borderRadius: 40,
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              style={{ alignSelf: "center" }}
              name="greater-than"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            width: wp("70%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: 25,
            borderRadius: 30,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center" }}>Join Room</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            width: wp("70%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: 6,
            borderRadius: 30,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center" }}>Create Room</Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}

export default HeadtoHead;
