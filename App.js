import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CounterPage from "./src/CounterPage";
import CounterReducer from "./src/CounterReducer";
export default function App() {
  return (
    <View style={styles.container}>
      <CounterReducer></CounterReducer>
      {/* <CounterPage></CounterPage>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
