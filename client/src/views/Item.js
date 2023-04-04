import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getDesign } from "../Redux/actions";

import { AntDesign } from "@expo/vector-icons";

const Item = ({ route, navigation }) => {
  let dispatch = useDispatch();
  const design = useSelector((state) => state.designs.current);

  const { id } = route.params;

  useEffect(() => {
    dispatch(getDesign(id));
  }, []);

  /* ejemplo de recibir parametros
    <View>
      <Text>itemId: {JSON.stringify(id)}</Text>
    </View>
  */

  if (design.id !== id) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: design.image }} style={styles.image} />
      <Text style={styles.title}>{design.title}</Text>
      <Text style={styles.likes}>
        <AntDesign name="heart" size={12} color="#999" /> {design.likes}
      </Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
});
