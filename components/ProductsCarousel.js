import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { availableProducts } from "../utils/data";
import Colors from "../helpers/Colors";
const { width, height } = Dimensions.get("window");

const ProductCarousel = ({ sectionTitle, bg, color }) => {
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
    </View>
  );

  return (
    <View className="my-5">
      <View
        className=" p-2 flex-row justify-between"
        style={{ backgroundColor: bg || Colors.black }}>
        <Text
          className="font-bold"
          style={{ fontFamily: "sen", color: color || Colors.white }}>
          {sectionTitle}
        </Text>
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
    </View>
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

export default ProductCarousel;
