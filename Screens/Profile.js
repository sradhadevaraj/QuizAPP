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

function Profile({ navigation }) {
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
            // backgroundColor: "yellow",
            width: wp("40%"),
            height: hp("10%"),
            alignSelf: "center",
            marginTop: 50,
            justifyContent: "center",
          }}
        >
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", fontSize: 25 }}
          >
            PROFILE
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "yellow",
            width: wp("40%"),
            height: hp("40%"),
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 80,
            borderWidth: 2,
            borderColor: "#F9A61A",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 80 }}
            source={require("../assets/prof.jpg")}
          />
          <View
            style={{
              backgroundColor: "#AAABAB",
              width: wp("10%"),
              height: hp("10%"),
              borderRadius: 30,
              position: "absolute",
              right: -3,
              bottom: 10,
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              style={{ alignSelf: "center" }}
              name="pencil"
              size={30}
            />
          </View>
        </View>
        <View
          style={{
            //backgroundColor: "green",
            width: wp("47%"),
            height: hp("7%"),
            alignSelf: "center",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: wp("30%"), height: hp("5%") }}
            source={require("../assets/star-01.png")}
          />
        </View>
        <View
          style={{
            //backgroundColor: "cyan",
            width: wp("90%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: 20,
            justifyContent: "space-between",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#DFA944",
          }}
        >
          <TextInput
            style={{ fontSize: 18 }}
            placeholder="Noah"
            keyboardType="numeric"
            placeholderTextColor="black"
          />
          <MaterialCommunityIcons
            style={{ alignSelf: "center" }}
            name="pencil"
            size={24}
          />
        </View>
        <View
          style={{
            // backgroundColor: "green",
            width: wp("90%"),
            height: hp("8%"),
            marginLeft: 15,
            marginTop: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "grey", fontSize: 16 }}>Gender</Text>
        </View>
        <View
          style={{
            // backgroundColor: "violet",
            width: wp("90%"),
            height: hp("9%"),
            alignSelf: "center",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#D3D3D3",
              width: wp("28%"),
              height: hp("9%"),
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          >
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#F36B22",
              width: wp("30%"),
              height: hp("9%"),
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#D3D3D3",
              width: wp("28%"),
              height: hp("9%"),
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <Text>Male</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            //backgroundColor: "cyan",
            width: wp("90%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: 20,
            justifyContent: "space-between",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#DFA944",
          }}
        >
          <TextInput
            style={{ fontSize: 18 }}
            placeholder="Las Vegas"
            keyboardType="numeric"
            placeholderTextColor="black"
          />
          <MaterialCommunityIcons
            style={{ alignSelf: "center" }}
            name="pencil"
            size={24}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#F36B22",
            width: wp("35%"),
            height: hp("11%"),
            alignSelf: "center",
            marginTop: 40,
            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontsize: 16 }}>Save</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Profile;
