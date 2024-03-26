import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../helpers/Colors";

const Advert = ({ title, images }) => {
  return (
    <View className="my-5">
      {/* Banner 1 */}
      <View style={{ backgroundColor: Colors.black, padding: 10 }}>
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

      {/* Banner 2 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}>
        {images.map((image, index) => {
          return (
            <Image
              source={image.img}
              key={index}
              style={{
                width: "100%",
                height: 200, // Corrected typo here
                resizeMode: "contain",
                borderRadius: 8,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Advert;
