import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../helpers/Colors";
import { collections1 } from "../utils/data";

const Collections = ({ title, data }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.collectionItem}>
      <ImageBackground source={item.image} style={styles.collectionImage}>
        <View style={styles.overlay}>
          <Text style={styles.collectionName}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View className="my-5">
      <View className="" style={{ backgroundColor: Colors.black, padding: 10 }}>
        <Text
          style={{
            fontFamily: "sen",
            color: Colors.white,
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}>
          {title}
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  collectionItem: {
    flex: 1,
    margin: 8,
  },
  collectionImage: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  collectionName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Collections;
