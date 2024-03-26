import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";

const WelcomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const { height } = Dimensions.get("window");

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Set the duration of the animation in milliseconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ImageBackground
        source={require("../assets/images/s-welcome.jpg")} // Replace with your image source
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Animated.Text style={[styles.subText, { opacity: fadeAnim }]}>
            Welcome to
          </Animated.Text>
          <Animated.Text
            className=" font-calistoga"
            style={[styles.welcomeText, { opacity: fadeAnim }]}>
            Shopeet
          </Animated.Text>

          <Animated.View
            style={{
              opacity: fadeAnim,
              height: height / 3.3,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
              backgroundColor: "rgba(255,255,255, 0.2)",
            }}
            className={` w-full absolute bottom-0  flex items-center justify-center p-10 `}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Register")}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)", // Adjust the opacity as needed
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  welcomeText: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginTop: -15,
    fontFamily: "calistoga",
  },
  subText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    maxWidth: 300,
    position: "absolute",
    bottom: 30,
  },
  button: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    fontFamily: "calistoga",
  },
});

export default WelcomeScreen;
