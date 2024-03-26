import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Carousel from "react-native-snap-carousel";
import Colors from "../helpers/Colors";
const { width, height } = Dimensions.get("window");

const data = [
  { id: "1", imageUrl: require("../assets/images/banner/s-banner1.jpg") },
  { id: "2", imageUrl: require("../assets/images/banner/s-banner2.jpg") },
  { id: "3", imageUrl: require("../assets/images/banner/s-banner3.jpg") },
  { id: "4", imageUrl: require("../assets/images/banner/s-banner4.jpg") },
  { id: "5", imageUrl: require("../assets/images/banner/s-banner5.jpg") },
  { id: "6", imageUrl: require("../assets/images/banner/s-banner6.jpg") },
  // Add more data items as needed
];

const HomeBanners = () => {
  const renderItem = ({ item }) => (
    <View className="p-2">
      <Image source={item.imageUrl} className="w-72 h-36 rounded-md" />
    </View>
  );

  return (
    <View className="">
      <TouchableOpacity
        activeOpacity={0.6}
        className="p-3 mt-1"
        style={{ backgroundColor: Colors.black }}>
        <Text
          className="text-[12px] text-center"
          style={{ fontFamily: "sen", color: Colors.white }}>
          Set up your first online shop. Click here to begin
        </Text>
      </TouchableOpacity>
      <Carousel
        data={data}
        layout={"default"}
        renderItem={renderItem}
        sliderWidth={width} // Adjust the slider width as needed
        itemWidth={width * 0.7} // Adjust the item width as needed
        autoplay
        inactiveSlideOpacity={0.8}
        loop
        autoplayInterval={3000} // Adjust the autoplay interval as needed
      />
    </View>
  );
};

export default HomeBanners;
