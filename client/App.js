import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";

import Home from "./src/views/Home";
import Item from "./src/views/Item";

const Stack = createNativeStackNavigator();

const options = (component) => {
  return {
    title: component,
    headerStyle: {
      backgroundColor: "midnightblue",
    },
    headerTitleStyle: {
      color: "#fff",
    },
    headerTintColor: "#fff",
  };
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerStyle: { backgroundColor: "midnightblue" },
              headerTitleStyle: { color: "#fff" },
              title: "Diseños",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <Text
                    style={{ color: "#fff", marginRight: 20, fontSize: 15 }}
                  >
                    Admin
                  </Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Item"
            component={Item}
            options={() => options("")}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
