import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Home({ navigation }) {
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
          // backgroundColor: "yellow",
          width: wp("100%"),
          height: hp("63%"),
          alignSelf: "center",
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          source={require("../assets/1.png")}
        />
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("42%"),
            height: hp("16%"),
            position: "absolute",
            left: 15,
            top: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "blue",
              width: wp("15%"),
              height: hp("15%"),
              borderRadius: 30,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 30,
                borderColor: "white",
                borderWidth: 3,
              }}
              source={require("../assets/prof.jpg")}
            />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Noah Flynn
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          width: wp("90%"),
          height: hp("47%"),
          alignSelf: "center",
          marginTop: -115,
          borderRadius: 20,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
          source={require("../assets/green.png")}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#506266",
            width: wp("35%"),
            height: hp("10%"),
            position: "absolute",
            left: 15,
            top: 15,
            borderRadius: 30,
            elevation: 3,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            Play Now
          </Text>
        </TouchableOpacity>
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("30%"),
            height: hp("8%"),
            marginTop: -65,
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              color: "white",
            }}
          >
            Want to get better and win more !
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: "violet",
            width: wp("41%"),
            height: hp("8%"),
            justifyContent: "center",
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Play With Your Friends....
          </Text>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("20%"),
          height: hp("2%"),
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#EF2A29",
            width: wp("2%"),
            height: hp("2%"),
            borderRadius: 30,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#CCCCCC",
            width: wp("1.5%"),
            height: hp("1.5%"),
            borderRadius: 30,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#CCCCCC",
            width: wp("1.5%"),
            height: hp("1.5%"),
            borderRadius: 30,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#CCCCCC",
            width: wp("1.5%"),
            height: hp("1.5%"),
            borderRadius: 30,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "#FFE9DB",
          width: wp("92%"),
          height: hp("9%"),
          marginTop: 20,
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontSize: 16, marginLeft: 15 }}>Quiz Categories</Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFE9DB",
          width: wp("92%"),
          height: hp("30%"),
          alignSelf: "center",
          borderRadius: 15,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            //backgroundColor: "green",
            width: wp("26%"),
            height: hp("27%"),
          }}
          onPress={() => navigation.navigate("QuickPlay")}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              borderColor: "#EE7A7A",
              borderWidth: 5,
            }}
            source={require("../assets/red.png")}
          />
          <View
            style={{
              //backgroundColor: "yellow",
              width: wp("11%"),
              height: hp("11%"),
              position: "absolute",
              right: 10,
              top: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/game.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "black",
              width: wp("20%"),
              height: hp("5%"),
              position: "absolute",
              bottom: 10,
              left: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",

                fontWeight: "bold",
              }}
            >
              QuickPlay
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // backgroundColor: "yellow",
            width: wp("26%"),
            height: hp("27%"),
          }}
          onPress={() => navigation.navigate("HeadtoHead")}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              borderColor: "#B1D35C",
              borderWidth: 5,
            }}
            source={require("../assets/gree.png")}
          />
          <View
            style={{
              //backgroundColor: "yellow",
              width: wp("11%"),
              height: hp("11%"),
              position: "absolute",
              right: 10,
              top: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/head.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "black",
              width: wp("20%"),
              height: hp("5%"),
              position: "absolute",
              bottom: 10,
              left: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Head to Head
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // backgroundColor: "cyan",
            width: wp("26%"),
            height: hp("27%"),
          }}
          onPress={() => navigation.navigate("Playwithfriends")}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              borderColor: "#F6A881",
              borderWidth: 5,
            }}
            source={require("../assets/orange.png")}
          />
          <View
            style={{
              //backgroundColor: "yellow",
              width: wp("11%"),
              height: hp("11%"),
              position: "absolute",
              right: 10,
              top: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/peoples.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "black",
              width: wp("20%"),
              height: hp("5%"),
              position: "absolute",
              bottom: 20,
              left: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Play with Friends
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#FFE9DB",
          width: wp("92%"),
          height: hp("30%"),
          alignSelf: "center",
          borderRadius: 15,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            //backgroundColor: "green",
            width: wp("26%"),
            height: hp("27%"),
          }}
          onPress={() => navigation.navigate("PlayWin")}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              borderColor: "#4FCAF3",
              borderWidth: 5,
            }}
            source={require("../assets/blue.png")}
          />
          <View
            style={{
              //backgroundColor: "yellow",
              width: wp("11%"),
              height: hp("11%"),
              position: "absolute",
              right: 10,
              top: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/build.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "black",
              width: wp("20%"),
              height: hp("5%"),
              position: "absolute",
              bottom: 10,
              left: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",

                fontWeight: "bold",
              }}
            >
              Play & Win
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "#5A517D",
            width: wp("26%"),
            height: hp("27%"),
            borderRadius: 20,
            borderColor: "#6B6EAB",
            borderWidth: 5,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              //backgroundColor: "yellow",
              width: wp("11%"),
              height: hp("11%"),
              position: "absolute",
              right: 8,
              top: 6,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/trophy.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "black",
              width: wp("20%"),
              height: hp("5%"),
              position: "absolute",
              bottom: 15,
              left: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Champions League
            </Text>
          </View>
          <MaterialCommunityIcons
            style={{ alignSelf: "center" }}
            name="lock"
            size={40}
            color="white"
          />
        </View>
        <View
          style={{
            backgroundColor: "#865E80",
            width: wp("26%"),
            height: hp("27%"),
            borderRadius: 20,
            borderColor: "#D192C1",
            borderWidth: 5,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              //backgroundColor: "yellow",
              width: wp("11%"),
              height: hp("11%"),
              position: "absolute",
              right: 7,
              top: 7,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/leaf.png")}
            />
          </View>
          <View
            style={{
              // backgroundColor: "black",
              width: wp("20%"),
              height: hp("5%"),
              position: "absolute",
              bottom: 8,
              left: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Star War
            </Text>
          </View>
          <MaterialCommunityIcons
            style={{ alignSelf: "center" }}
            name="lock"
            size={40}
            color="white"
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
