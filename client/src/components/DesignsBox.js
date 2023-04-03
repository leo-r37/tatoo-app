import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { getDesigns } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

const DesignsBox = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDesigns());
  }, []);

  const designs = useSelector((state) => state.designs.designs);

  return (
    <ScrollView style={s.container}>
      {designs &&
        designs.map((d) => (
          <View style={s.card} key={d.id}>
            <Image
              style={s.image}
              source={{
                uri: d.image,
              }}
            />
          </View>
        ))}
    </ScrollView>
  );
};

export default DesignsBox;

const s = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "#f00",
    borderWidth: 1,
    width: "90%",
    height: "40px",
    flexDirection: "row"
  },
  card: {
    marginTop: "5%",
    backgroundColor: "#000",
    borderRadius: 10,
    borderColor: "#f00",
    borderWidth: 1,
    width: "40%",
    height: "15%",
    // justifyContent: "space-evenly",
    // alignItems: "center",
  },
  text: {
    color: "red",
  },
  image: {
    width: 70,
    height: 70,
  },
});
