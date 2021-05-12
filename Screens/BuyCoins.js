import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function BuyCoins({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#ffff",
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
          width: wp("73%"),
          height: hp("35%"),
          alignSelf: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/buycoins.png")}
        />
      </View>
      <View
        style={{
          backgroundColor: "#ffece5",
          width: wp("90%"),
          height: hp("140%"),
          alignSelf: "center",
          marginTop: 10,
          elevation: 3,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            backgroundColor: "#a2ce52",
            width: wp("55%"),
            height: hp("9%"),
            alignSelf: "center",
            borderRadius: 30,
            elevation: 3,
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", alignSelf: "center", fontSize: 16 }}>
            Free Coins
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("85%"),
            height: hp("35%"),
            alignSelf: "center",
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              // backgroundColor: "orange",
              width: wp("26%"),
              height: hp("32%"),
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/video.png")}
            />
            <Text
              style={{
                color: "#fb0102",
                position: "absolute",
                alignSelf: "center",
                marginTop: 5,
              }}
            >
              x50
            </Text>
            <Text
              style={{
                color: "#ffff",
                position: "absolute",
                alignSelf: "center",
                bottom: 5,
                fontSize: 12,
              }}
            >
              WATCH AD
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "blue",
              width: wp("26%"),
              height: hp("32%"),
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/redv.png")}
            />
            <Text
              style={{
                color: "#fb0102",
                position: "absolute",
                alignSelf: "center",
                marginTop: 5,
              }}
            >
              x100
            </Text>
            <Text
              style={{
                color: "#ffff",
                position: "absolute",
                alignSelf: "center",
                bottom: 5,
                fontSize: 12,
              }}
            >
              AD LOCKED
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "green",
              width: wp("26%"),
              height: hp("32%"),
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/redv.png")}
            />
            <Text
              style={{
                color: "#fb0102",
                position: "absolute",
                alignSelf: "center",
                marginTop: 5,
              }}
            >
              x150
            </Text>
            <Text
              style={{
                color: "#ffff",
                position: "absolute",
                alignSelf: "center",
                bottom: 5,
                fontSize: 12,
              }}
            >
              AD LOCKED
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#a2ce52",
            width: wp("55%"),
            height: hp("9%"),
            alignSelf: "center",
            borderRadius: 30,
            elevation: 3,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", alignSelf: "center", fontSize: 16 }}>
            Paid Coins
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              // backgroundColor: "yellow",
              width: wp("85%"),
              height: hp("35%"),
              alignSelf: "center",
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                // backgroundColor: "orange",
                width: wp("26%"),
                height: hp("32%"),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/greenv.png")}
              />
              <Text
                style={{
                  color: "#fb0102",
                  position: "absolute",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                x100
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 5,
                  fontSize: 12,
                }}
              >
                $20
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: "orange",
                width: wp("26%"),
                height: hp("32%"),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/greenv.png")}
              />
              <Text
                style={{
                  color: "#fb0102",
                  position: "absolute",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                x100
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 5,
                  fontSize: 12,
                }}
              >
                $20
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: "green",
                width: wp("26%"),
                height: hp("32%"),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/greenv.png")}
              />
              <Text
                style={{
                  color: "#fb0102",
                  position: "absolute",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                x150
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 5,
                  fontSize: 12,
                }}
              >
                $30
              </Text>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: "yellow",
              width: wp("85%"),
              height: hp("35%"),
              alignSelf: "center",
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                // backgroundColor: "orange",
                width: wp("26%"),
                height: hp("32%"),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/greenv.png")}
              />
              <Text
                style={{
                  color: "#fb0102",
                  position: "absolute",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                x50
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 5,
                  fontSize: 12,
                }}
              >
                $40
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: "blue",
                width: wp("26%"),
                height: hp("32%"),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/greenv.png")}
              />
              <Text
                style={{
                  color: "#fb0102",
                  position: "absolute",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                x100
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 5,
                  fontSize: 12,
                }}
              >
                $60
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: "green",
                width: wp("26%"),
                height: hp("32%"),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/greenv.png")}
              />
              <Text
                style={{
                  color: "#fb0102",
                  position: "absolute",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                x150
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 5,
                  fontSize: 12,
                }}
              >
                $30
              </Text>
            </View>
          </View>
          <View
            style={{
              //backgroundColor: "yellow",
              width: wp("85%"),
              height: hp("35%"),
              alignSelf: "center",
              marginTop: 15,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                // backgroundColor: "orange",
                width: wp("26%"),
                height: hp("32%"),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/greenv.png")}
              />
              <Text
                style={{
                  color: "#fb0102",
                  position: "absolute",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                x50
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 5,
                  fontSize: 12,
                }}
              >
                $40
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: "blue",
                width: wp("26%"),
                height: hp("32%"),
                marginLeft: 15,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/greenv.png")}
              />
              <Text
                style={{
                  color: "#fb0102",
                  position: "absolute",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                x100
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  position: "absolute",
                  alignSelf: "center",
                  bottom: 5,
                  fontSize: 12,
                }}
              >
                $60
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default BuyCoins;
