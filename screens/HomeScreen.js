import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../helpers/Colors";
import { TextInput } from "react-native-element-textinput";
import MyStatusBar from "../helpers/MyStatusBar";
import HomeBanners from "../components/HomeBanners";
import ProductListCategories from "../components/ProductListCategories";
import AvailableProducts from "../components/AvailableProducts";
import FlashSales from "../components/FlashSales";
import ProductCarousel from "../components/ProductsCarousel";
import Advert from "../components/Advert";
import Collections from "../components/Collections";
import { collections1, collections2, phoneCollections } from "../utils/data";
import MainCollections from "../components/MainCollections";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();
  const amazingOfferImages = [
    {
      img: require("../assets/images/banner/s-banner8.jpg"),
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: Colors.dark,
      },
      headerLeft: () => (
        <View
          className={`relative ${
            Platform.OS === "ios" ? "-top-1.5" : "top-2.5"
          }`}>
          <TextInput
            style={styles.input}
            inputStyle={styles.inputStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            placeholder="Enter a valid email address"
            placeholderTextColor="gray"
            focusColor={Colors.primary}
            fontFamily="calistoga"
            renderLeftIcon={() => (
              <FontAwesome
                name="search"
                size={16}
                color={Colors.dark}
                style={{ width: "10%", opacity: 0.6 }}
              />
            )}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          className={`relative ${
            Platform.OS === "ios" ? "-top-1.5" : "top-2.5"
          }`}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
          onPress={() => navigation.navigate("ShoppingCart")}>
          <FontAwesome name="shopping-cart" size={22} color={Colors.white} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      <MyStatusBar backgroundColor={Colors.dark} barStyle="light-content" />
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <HomeBanners />
        <ProductListCategories />
        <AvailableProducts />
        <FlashSales />
        <ProductCarousel sectionTitle="BLACK FRIDAY DEALS" />
        <Advert title="Amazing offer" images={amazingOfferImages} />
        <ProductCarousel
          sectionTitle="DIAGO OFFICIAL STORE DEALS"
          bg="#4da6ce"
        />
        <Collections title="SHOP FROM OUR COLLECTIONS" data={collections1} />
        <ProductCarousel sectionTitle="BEST PRICE" />
        <Collections title="MORE COLLECTIONS" data={collections2} />
        <MainCollections title="PHONE DEALS" data={phoneCollections} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  searchBarContainer: {},
  input: {
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 10,
    width: width * 0.8,
    borderColor: Colors.gray,
    backgroundColor: Colors.gray,
    marginBottom: 8,
    marginTop: 8,
  },
  inputStyle: { fontSize: 14 },
  labelStyle: {
    fontSize: 12,
    position: "absolute",

    top: -8,
    paddingHorizontal: 8,
    marginLeft: -4,
    zIndex: 20,
  },
  placeholderStyle: { fontSize: 14, zIndex: 20 },
  textErrorStyle: { fontSize: 14 },
});

export default HomeScreen;
