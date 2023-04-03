import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bar from "./src/components/Bar";
import DesignsBox from "./src/components/DesignsBox";
import Head from "./src/components/Head";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Bar />
      <Head />
      <DesignsBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "7%",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    // gap: '1%',
    // justifyContent: 'center',
  },
});
