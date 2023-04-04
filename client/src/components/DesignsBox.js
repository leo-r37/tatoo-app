import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getDesigns } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const DesignsBox = ({ navigation }) => {
  let dispatch = useDispatch();
  const designs = useSelector((state) => state.designs.designs);

  const [showing, setShowing] = useState([]);

  useEffect(() => {
    if (designs.length <= 0) {
      dispatch(getDesigns());
      setShowing(designs);
    }
    if (designs.length !== showing.length) {
      dispatch(getDesigns());
      setShowing(designs);
    }
  }, [designs]);

  /* 
  onPress={() => {
        navigation.navigate("Item", {
          id,
        });
      }}
  */

  const Item = ({ id, title, image, likes }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate("Item", {
          id,
        });
      }}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.likes}>
        <AntDesign name="heart" size={12} color="#999" /> {likes}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={showing}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            image={item.image}
            likes={item.likes}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns="2"
      />
    </SafeAreaView>
  );
};

export default DesignsBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#333",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  likes: {
    color: "#999",
    fontSize: 14,
  },
});
