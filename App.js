import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Counter from "./src/components/Counter";
import Users from "./src/components/Users";
import UseReducer from "./src/components/UseReducer";
import Memo from "./src/components/Memo";
import CallBack from "./src/components/CallBack";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Counter />
        <Users />
        <UseReducer />
        <Memo />
        <CallBack />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
