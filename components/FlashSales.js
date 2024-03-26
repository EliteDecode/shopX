import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import * as Progress from "react-native-progress";

import Carousel from "react-native-snap-carousel";
import { availableProducts } from "../utils/data";
import Colors from "../helpers/Colors";
const { width, height } = Dimensions.get("window");

const FlashSales = () => {
  const [countdown, setCountdown] = useState(3600); // Set initial countdown time in seconds (3600 seconds = 1 hour)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  // Convert seconds to HH:MM:SS format
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const renderItem = ({ item }) => (
    <View
      style={styles.carouselItem}
      className="border-[#e1e2e373] border shadow-lg ">
      <View className="items-center">
        <Image source={item.image} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Text
        style={styles.productDiscount}
        className=" px-1.5 py-0.5 bg-white rounded-md">
        -{item.discount}%
      </Text>
      <View className="mt-2">
        <Text style={styles.itemsLeft}>{item.items} items left</Text>
        <Progress.Bar
          progress={item.items / 100}
          width={null}
          color={Colors.primary}
          height={5}
          borderColor={Colors.gray}
          unfilledColor={Colors.gray}
        />
      </View>
    </View>
  );

  return (
    <>
      <View
        style={{ backgroundColor: Colors.primary }}
        className="flex flex-row items-center justify-between px-3 my-5">
        <View>
          <View className=" p-2 flex-row  items-center">
            <Image
              source={require("../assets/images/flash-sale.png")}
              style={{ width: "18%", height: "100%", resizeMode: "contain" }}
            />
            <Text
              className="font-bold text-white"
              style={{ fontFamily: "sen" }}>
              Flash Sales
            </Text>
          </View>
          <Text
            style={{ color: Colors.white, fontFamily: "sen" }}
            className="px-2 mb-2">
            Time Left: {formatTime(countdown)}
          </Text>
        </View>
        <Text
          className="font-bold"
          style={{ color: Colors.white, fontFamily: "sen" }}>
          See all
        </Text>
      </View>
      <View style={styles.container}>
        <Carousel
          data={availableProducts}
          layout={"default"}
          renderItem={renderItem}
          sliderWidth={width} // Adjust the slider width as needed
          itemWidth={width * 0.35} // Adjust the item width as needed
          autoplay
          inactiveSlideOpacity={0.8}
          loop
          autoplayInterval={3000} // Adjust the autoplay interval as needed
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 16,
  },
  progressBar: {
    width: width * 0.5,
    marginBottom: 16,
  },
  itemsLeft: {
    fontSize: 13,
    marginBottom: 3,
  },
  carouselItem: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    position: "relative",
  },
  productImage: {
    width: "70%",
    height: 80,
    resizeMode: "cover",
    marginBottom: 8,
    borderRadius: 4,
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 4,
  },
  productDiscount: {
    fontSize: 12,
    color: Colors.primary,
    position: "absolute",
    top: 15,
    right: 10,
    fontWeight: "bold",
  },
});

export default FlashSales;
