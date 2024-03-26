import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const imageWidth = width;
const imageHeight = height / 2;

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.replace("Welcome");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{ flex: 1 }}>
        <Onboarding
          pages={[
            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require("../assets/images/onboarding/s-onboarding1.jpg")}
                  style={{ width: imageWidth, height: imageHeight }}
                />
              ),
              title: (
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 2,
                  }}>
                  Explore a World of Possibilities
                </Text>
              ),
              subtitle: (
                <Text style={{ fontSize: 12 }}>
                  Your one-stop destination for all your shopping needs.
                </Text>
              ),
            },
            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require("../assets/images/onboarding/s-onboarding2.jpg")}
                  style={{ width: imageWidth, height: imageHeight }}
                />
              ),
              title: (
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 2,
                  }}>
                  Unbeatable Offers Await You
                </Text>
              ),
              subtitle: (
                <Text style={{ fontSize: 12, textAlign: "center" }}>
                  Dive into a world of exclusive discounts and promotions.
                </Text>
              ),
            },
            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require("../assets/images/onboarding/s-onboarding3.jpg")}
                  style={{ width: imageWidth, height: imageHeight }}
                />
              ),
              title: (
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 2,
                  }}>
                  Seamless Shopping Experience
                </Text>
              ),
              subtitle: (
                <Text style={{ fontSize: 12, textAlign: "center" }}>
                  Shop with confidence using Shopeet.
                </Text>
              ),
            },
          ]}
          onDone={handleDone}
          onSkip={handleDone}
        />
      </View>
    </>
  );
};

export default OnboardingScreen;
