import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { availableProducts } from "../utils/data";
import Colors from "../helpers/Colors";

const AvailableProducts = () => {
  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Text style={styles.productDiscount}>-{item.discount}%</Text>
      {/* Add your "Buy Now" button or any other actions here */}
    </TouchableOpacity>
  );

  return (
    <>
      <View className="mt-8">
        <View
          className=" p-2 flex-row justify-between"
          style={{ backgroundColor: Colors.gray }}>
          <Text className="font-bold " style={{ fontFamily: "sen" }}>
            Available Now
          </Text>
          <Text
            className="font-bold"
            style={{ color: Colors.primary, fontFamily: "sen" }}>
            See all
          </Text>
        </View>
        <FlatList
          data={availableProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.container}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    margin: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 8,
    borderRadius: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 4,
  },
  productDiscount: {
    fontSize: 14,
    color: Colors.primary, // or any other color for discount
  },
});

export default AvailableProducts;
