import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../helpers/Colors";

const MainCollections = ({ title, data }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.collectionItem}>
      <ImageBackground source={item.image} style={styles.collectionImage}>
        <View style={styles.redBackground}>
          <Text style={styles.collectionName}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <TouchableOpacity className="my-5">
      <View style={{ backgroundColor: Colors.black, padding: 10 }}>
        <Text
          style={{
            fontFamily: "sen",
            color: Colors.white,

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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  redBackground: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    right: 0,
    height: 25, // Adjust the height as needed
    backgroundColor: "rgba(0, 0, 0, 0.7),",
  },
  collectionName: {
    color: "white",
    fontSize: 13,
    zIndex: 10,
    fontFamily: "sen",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default MainCollections;
