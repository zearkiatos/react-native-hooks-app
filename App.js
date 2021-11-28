import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Counter from "./src/components/Counter";
import Users from "./src/components/Users";
import UseReducer from "./src/components/UseReducer";
import Memo from "./src/components/Memo";

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
      <Users />
      <UseReducer />
      <Memo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
