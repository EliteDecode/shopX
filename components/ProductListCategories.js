import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Colors from "../helpers/Colors";

const data = [
  {
    id: "1",
    category: "Electronics",
    imageUrl: require("../assets/images/categories/s-electronics.jpg"),
  },
  {
    id: "2",
    category: "Fashion",
    imageUrl: require("../assets/images/categories/s-fashion.jpg"),
  },
  {
    id: "3",
    category: "Kitchen",
    imageUrl: require("../assets/images/categories/s-kitchen-utensils.jpg"),
  },
  {
    id: "4",
    category: "Sports",
    imageUrl: require("../assets/images/categories/s-sports.jpg"),
  },
  {
    id: "5",
    category: "Books",
    imageUrl: require("../assets/images/categories/books.jpg"),
  },
  {
    id: "6",
    category: "Beauty",
    imageUrl: require("../assets/images/categories/s-beauty.jpg"),
  },
  {
    id: "7",
    category: "Toys & Games",
    imageUrl: require("../assets/images/categories/s-toys.jpg"),
  },
  {
    id: "8",
    category: "Automotive",
    imageUrl: require("../assets/images/categories/s-automotive.jpg"),
  },
  {
    id: "9",
    category: "Health",
    imageUrl: require("../assets/images/categories/s-health.jpg"),
  },
  {
    id: "10",
    category: "Furniture",
    imageUrl: require("../assets/images/categories/s-furniture.jpg"),
  },
  {
    id: "11",
    category: "Jewelry",
    imageUrl: require("../assets/images/categories/s-jewelry.jpg"),
  },
  {
    id: "12",
    category: "Music",
    imageUrl: require("../assets/images/categories/s-music.jpg"),
  },

  // Add more categories as needed
];

const ProductListCategories = () => {
  const RenderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryBox} className=" py-2">
      <Image source={item.imageUrl} style={styles.image} />
      <Text style={styles.categoryText}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View
        className=" p-2 flex-row justify-between"
        style={{ backgroundColor: Colors.gray }}>
        <Text className="font-bold " style={{ fontFamily: "sen" }}>
          Categories
        </Text>
      </View>
      <View style={styles.container} className=" py-2 flex-1 mb-30">
        <View style={styles.gridContainer}>
          {data.map((item, index) => (
            <RenderItem key={index} item={item} />
          ))}
        </View>
      </View>
    </>
  );
};

export default ProductListCategories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  titleContainer: {
    padding: 10,
  },
  titleText: {
    fontFamily: "calistoga",
    fontSize: 18,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryBox: {
    width: "22%", // Adjust as needed
    aspectRatio: 1, // Maintain aspect ratio
    marginLeft: "1.5%",
    marginRight: "1.5%",
    marginTop: 5,
    marginBottom: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },
});
