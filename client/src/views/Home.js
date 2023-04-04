import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";

import DesignsBox from "../components/DesignsBox";
import Head from "../components/Head";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Head />
      <DesignsBox navigation={navigation}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: "7%",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
});
