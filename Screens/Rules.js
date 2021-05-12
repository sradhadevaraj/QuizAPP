import React from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Rules({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#f2f2f2",
        flex: 1,
      }}
    >
      <ImageBackground style={{ flex: 1 }} source={require("../assets/As.png")}>
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("15%"),
            height: hp("10%"),
            alignSelf: "center",
            marginTop: 40,
            justifyContent: "center",
            borderBottomWidth: 3,
            borderColor: "#fe6a00",
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 25 }}>Help</Text>
        </View>
        <ScrollView>
          <View
            style={{
              // backgroundColor: "red",
              width: wp("25%"),
              height: hp("10%"),
              marginLeft: 20,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 22, color: "#710100", fontWeight: "bold" }}
            >
              Test 4
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("36%"),
              height: hp("10%"),
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#fe6a00",
                width: wp("5%"),
                height: hp("5%"),
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  width: wp("3%"),
                  height: hp("3%"),
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 20 }}>Instructions</Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("90%"),
              height: hp("100%"),
              alignSelf: "center",
            }}
          >
            <Text style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus efficitur ante, a placerat ipsum vulputate ultrices. Sed
              consequat pellentesque hendrerit. Etiam faucibus mi malesuada,
              vulputate tellus in, molestie ligula. Praesent vel ullamcorper
              mauris. Etiam egestas mauris pretium ante semper efficitur.
              Phasellus eget arcu ac leo blandit luctus. Nunc et rutrum mauris,
              quis elementum nunc. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Fusce et
              facilisis libero.
            </Text>
            <Text style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus efficitur ante, a placerat ipsum vulputate ultrices. Sed
              consequat pellentesque hendrerit. Etiam faucibus mi malesuada,
              vulputate tellus in, molestie ligula. Praesent vel ullamcorper
              mauris. Etiam egestas mauris pretium ante semper efficitur.
              Phasellus eget arcu ac leo blandit luctus. Nunc et rutrum mauris,
              quis elementum nunc. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Fusce et
              facilisis libero.
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("36%"),
              height: hp("10%"),
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#fe6a00",
                width: wp("5%"),
                height: hp("5%"),
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  width: wp("3%"),
                  height: hp("3%"),
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 20 }}>How to Play</Text>
          </View>
          <View
            style={{
              backgroundColor: "violet",
              width: wp("90%"),
              height: hp("60%"),
              alignSelf: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/reactadd.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "red",
              width: wp("25%"),
              height: hp("10%"),
              marginLeft: 20,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 22, color: "#710100", fontWeight: "bold" }}
            >
              Test 1
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("36%"),
              height: hp("10%"),
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#fe6a00",
                width: wp("5%"),
                height: hp("5%"),
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  width: wp("3%"),
                  height: hp("3%"),
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 20 }}>Instructions</Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("90%"),
              height: hp("50%"),
              alignSelf: "center",
            }}
          >
            <Text style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus efficitur ante, a placerat ipsum vulputate ultrices. Sed
              consequat pellentesque hendrerit. Etiam faucibus mi malesuada,
              vulputate tellus in, molestie ligula. Praesent vel ullamcorper
              mauris. Etiam egestas mauris pretium ante semper efficitur.
              Phasellus eget arcu ac leo blandit luctus. Nunc et rutrum mauris,
              quis elementum nunc. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Fusce et
              facilisis libero.
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("36%"),
              height: hp("10%"),
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#fe6a00",
                width: wp("5%"),
                height: hp("5%"),
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  width: wp("3%"),
                  height: hp("3%"),
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 20 }}>How to Play</Text>
          </View>
          <View
            style={{
              backgroundColor: "violet",
              width: wp("90%"),
              height: hp("60%"),
              alignSelf: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/boys.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "red",
              width: wp("25%"),
              height: hp("10%"),
              marginLeft: 20,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 22, color: "#710100", fontWeight: "bold" }}
            >
              Test 2
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("36%"),
              height: hp("10%"),
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#fe6a00",
                width: wp("5%"),
                height: hp("5%"),
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  width: wp("3%"),
                  height: hp("3%"),
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 20 }}>Instructions</Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("90%"),
              height: hp("16%"),
              alignSelf: "center",
            }}
          >
            <Text style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus efficitur ante, a placerat ipsum vulputate ultrices.
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("36%"),
              height: hp("10%"),
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#fe6a00",
                width: wp("5%"),
                height: hp("5%"),
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  width: wp("3%"),
                  height: hp("3%"),
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 20 }}>How to Play</Text>
          </View>
          <View
            style={{
              backgroundColor: "violet",
              width: wp("90%"),
              height: hp("60%"),
              alignSelf: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/TS.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "red",
              width: wp("25%"),
              height: hp("10%"),
              marginLeft: 20,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 22, color: "#710100", fontWeight: "bold" }}
            >
              Test 3
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("36%"),
              height: hp("10%"),
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#fe6a00",
                width: wp("5%"),
                height: hp("5%"),
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  width: wp("3%"),
                  height: hp("3%"),
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 20 }}>Instructions</Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("90%"),
              height: hp("25%"),
              alignSelf: "center",
            }}
          >
            <Text style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus efficitur ante, a placerat ipsum vulputate ultrices. Sed
              consequat pellentesque hendrerit. Etiam faucibus mi malesuada,
              vulputate tellus in, molestie ligula.
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("36%"),
              height: hp("10%"),
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#fe6a00",
                width: wp("5%"),
                height: hp("5%"),
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  width: wp("3%"),
                  height: hp("3%"),
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 20 }}>How to Play</Text>
          </View>
          <View
            style={{
              backgroundColor: "violet",
              width: wp("90%"),
              height: hp("60%"),
              alignSelf: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/moshv.png")}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default Rules;
