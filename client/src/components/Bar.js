import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Bar = () => {
  return (
    <View style={s.container}>
      <Button
        onPress={() => console.log('working')}
        title="Admin"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Bar;

const s = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "80%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
