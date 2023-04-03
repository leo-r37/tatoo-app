import { StyleSheet, Text, View, Alert, Button } from "react-native";
import React from "react";

const DesignsBox = () => {
  return (
    <View style={s.container}>
      <Text style={s.text}>Diseños</Text>
    </View>
  );
};

export default DesignsBox;

const s = StyleSheet.create({
  container: {
    marginTop: "5%",
    backgroundColor: "#000",
    borderRadius: 10,
    borderColor: "#f00",
    borderWidth: 1,
    width: "90%",
    height: "15%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    color: "red",
  },
});
