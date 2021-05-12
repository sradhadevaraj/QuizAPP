import React from "react";
import {
  Image,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Register({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%", marginTop: 30 }}
        source={require("../assets/As.png")}
      >
        <View
          style={{
            backgroundColor: "yellow",
            width: wp("55%"),
            height: hp("55%"),
            alignSelf: "center",
            marginTop: 80,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/boy.png")}
          />
        </View>
        <View
          style={{
            // backgroundColor: "cyan",
            width: wp("80%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: 15,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 23 }}>
            Enter Your Mobile Number
          </Text>
        </View>
        <View
          style={{
            //backgroundColor: "cyan",
            width: wp("80%"),
            height: hp("6%"),
            alignSelf: "center",

            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 18, color: "grey" }}>
            We will sent you a verification code
          </Text>
        </View>
        <View
          style={{
            //  backgroundColor: "cyan",
            width: wp("80%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: 30,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              //  backgroundColor: "yellow",
              width: wp("15%"),
              height: hp("11%"),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{
                width: wp("6%"),
                height: hp("6%"),
              }}
              source={require("../assets/india.png")}
            />
            <Text>+91</Text>
          </View>
          <View
            style={{
              // backgroundColor: "red",
              width: wp("60%"),
              height: hp("11%"),
              justifyContent: "center",
              borderBottomWidth: 1,
              borderColor: "black",
            }}
          >
            <TextInput
              style={{ fontSize: 18 }}
              placeholder=""
              keyboardType="numeric"
              placeholderTextColor="black"
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#fea500",
            width: wp("45%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: 50,
            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
            elevation: 3,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "white", fontsize: 16 }}>Send</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Register;
