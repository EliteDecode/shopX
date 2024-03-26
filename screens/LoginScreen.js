import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-element-textinput";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome
import Colors from "../helpers/Colors";
import { useNavigation } from "@react-navigation/native";
import MyStatusBar from "../helpers/MyStatusBar";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <>
      <MyStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingVertical: Platform.OS === "ios" ? 30 : 50,
          paddingHorizontal: Platform.OS === "ios" ? 10 : 20,
        }}>
        <ScrollView
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image
              source={require("../assets/images/loginImg.png")}
              style={{
                width: width / 1.4,
                height: height / 4,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: 30,
                fontFamily: "calistoga",
                fontWeight: "bold",
                color: Colors.dark,
              }}>
              Welcome Back!
            </Text>
            <Text style={{ fontSize: 13 }}>
              Log in to your account to discover more exciting deals.
            </Text>
          </View>

          <View style={styles.container}>
            <TextInput
              showIcon
              value={email}
              style={styles.input}
              inputStyle={styles.inputStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              // label="Email"
              placeholder="Enter a valid email address"
              placeholderTextColor="gray"
              focusColor={Colors.primary}
              fontFamily="calistoga"
              renderLeftIcon={() => (
                <FontAwesome
                  name="envelope"
                  size={16}
                  color={Colors.primary}
                  style={{ width: "10%", opacity: 0.6 }}
                />
              )}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              value={password}
              showIcon
              mode="password"
              style={styles.input}
              inputStyle={styles.inputStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              // label="Password"
              placeholder="Enter your password"
              placeholderTextColor="gray"
              focusColor={Colors.primary}
              renderLeftIcon={() => (
                <FontAwesome
                  name="lock"
                  size={22}
                  color={Colors.primary}
                  style={{ width: "10%", opacity: 0.6 }}
                />
              )}
              onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity className="self-end">
              <Text className="text-[12px] mr-2 flex-end">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <View className=" mt-5 rounded-full flex flex-col items-center justify-center">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="p-4 rounded-full flex flex-col items-center justify-center mt-2"
                style={{ backgroundColor: Colors.primary, width: width / 2 }}>
                <Text
                  className="text-white font-calistoga font-bold"
                  style={{ fontFamily: "sen" }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="items-center">
            <Text className="opacity-30" style={{ fontFamily: "sen" }}>
              Or connect using
            </Text>
            <View className="flex flex-row space-x-4 mt-3">
              <TouchableOpacity className="flex flex-row justify-around items-center px-2 w-[40%] py-3 rounded-lg bg-blue-600">
                <FontAwesome name="facebook" size={22} color="white" />
                <Text className="text-white font-bold text-[15px]">
                  Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row justify-around items-center px-2 w-[40%] py-3 rounded-lg bg-red-600">
                <FontAwesome name="google" size={22} color="white" />
                <Text className="text-white font-bold text-[15px]">Google</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            className="items-center mt-10">
            <Text className="text-[16px] font-bold">
              Don't have an account?{" "}
              <Text className="text-blue-500"> Sign Up </Text>
            </Text>
          </TouchableOpacity>

          <View style={{ marginBottom: 300 }}></View>
        </ScrollView>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 15,
  },
  input: {
    height: 55,
    paddingHorizontal: 18,
    borderRadius: 30,

    borderColor: Colors.gray,
    backgroundColor: Colors.gray,
    marginBottom: 8,
    marginTop: 8,
  },
  inputStyle: { fontSize: 14 },
  labelStyle: {
    fontSize: 12,
    position: "absolute",

    top: -8,
    paddingHorizontal: 8,
    marginLeft: -4,
    zIndex: 20,
  },
  placeholderStyle: { fontSize: 14, zIndex: 20 },
  textErrorStyle: { fontSize: 14 },
});
