import { FontAwesome } from "@expo/vector-icons";
import Colors from "../helpers/Colors";

export const registerFields = [
  {
    title: "Firstname",
    placeholder: "Enter your Firstname",
    mode: "text",
    icon: (
      <FontAwesome
        name="user"
        size={22}
        color={Colors.primary}
        style={{ width: "10%", opacity: 0.6 }}
      />
    ),
  },
  {
    title: "Lastname",
    placeholder: "Enter your Lastname",
    mode: "text",
    icon: (
      <FontAwesome
        name="user"
        size={22}
        color={Colors.primary}
        style={{ width: "10%", opacity: 0.6 }}
      />
    ),
  },
  {
    title: "Email",
    mode: "text",
    placeholder: "Enter your  Email Address",
    icon: (
      <FontAwesome
        name="envelope"
        size={15}
        color={Colors.primary}
        style={{ width: "10%", opacity: 0.6 }}
      />
    ),
  },
  {
    title: "Password",
    mode: "password",
    placeholder: "Enter your Password",
    icon: (
      <FontAwesome
        name="lock"
        size={20}
        color={Colors.primary}
        style={{ width: "10%", opacity: 0.6 }}
      />
    ),
  },
  {
    title: "Confirm Password",
    mode: "password",
    placeholder: "Enter your Password",
    icon: (
      <FontAwesome
        name="lock"
        size={22}
        color={Colors.primary}
        style={{ width: "10%", opacity: 0.6 }}
      />
    ),
  },
];

export const availableProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 1200.99,
    discount: 10,
    image: require("../assets/images/products/laptop.jpg"),
    items: 87,
  },
  {
    id: 2,
    name: "EarPod",
    price: 699.49,
    discount: 15,
    image: require("../assets/images/products/airpid.jpg"),
    items: 23,
  },
  {
    id: 3,
    name: "Headphones",
    price: 99.99,
    discount: 20,
    image: require("../assets/images/products/headset.jpg"),
    items: 76,
  },
  {
    id: 4,
    name: "Blue T-shirt",
    price: 899.99,
    discount: 5,
    image: require("../assets/images/products/tshirt.jpg"),
    items: 61,
  },
  {
    id: 5,
    name: "Nike Air",
    price: 49.99,
    discount: 25,
    image: require("../assets/images/products/air.jpg"),
    items: 96,
  },
  {
    id: 6,
    name: "Brogues Shoe",
    price: 79.49,
    discount: 12,
    image: require("../assets/images/products/coperateShoe.jpg"),
    items: 21,
  },
];

export const collections2 = [
  {
    id: "1",
    name: "Toys",
    image: require("../assets/images/categories/s-toys.jpg"),
  },
  {
    id: "2",
    name: "Fitness",
    image: require("../assets/images/categories/s-health.jpg"),
  },
  {
    id: "3",
    name: "Sport",
    image: require("../assets/images/categories/s-sports.jpg"),
  },
  {
    id: "4",
    name: "Music",
    image: require("../assets/images/categories/s-music.jpg"),
  },
  {
    id: "5",
    name: "Accessories",
    image: require("../assets/images/products/airpid.jpg"),
  },
  {
    id: "6",
    name: "Headset",
    image: require("../assets/images/products/headset.jpg"),
  },
];

export const collections1 = [
  {
    id: "1",
    name: "Books",
    image: require("../assets/images/categories/books.jpg"),
  },

  {
    id: "2",
    name: "Electronics",
    image: require("../assets/images/categories/s-electronics.jpg"),
  },
  {
    id: "3",
    name: "Fashion",
    image: require("../assets/images/categories/s-fashion.jpg"),
  },
  {
    id: "4",
    name: "Furnitures",
    image: require("../assets/images/categories/s-furniture.jpg"),
  },
  {
    id: "5",
    name: "Laptops",
    image: require("../assets/images/products/laptop.jpg"),
  },
  {
    id: "6",
    name: "Jewelries",
    image: require("../assets/images/categories/s-jewelry.jpg"),
  },
];

export const phoneCollections = [
  {
    id: "1",
    name: "Iphone 11",
    image: require("../assets/images/products/iphone11.jpg"),
  },
  {
    id: "2",
    name: "Ipad",
    image: require("../assets/images/products/ipad.jpg"),
  },
  {
    id: "3",
    name: "Andriod",
    image: require("../assets/images/products/andriod.jpg"),
  },
  {
    id: "4",
    name: "Iphone12",
    image: require("../assets/images/products/iphone12.jpg"),
  },
  {
    id: "5",
    name: "Andriod Fold",
    image: require("../assets/images/products/andriod2.jpg"),
  },
  {
    id: "6",
    name: "Tablets",
    image: require("../assets/images/products/tablets.jpg"),
  },
];
