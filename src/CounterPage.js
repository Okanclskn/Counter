import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./components/CustomButton";
const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>{counter}</Text>
      </View>

      <View style={styles.buttoncontainer}>
        <CustomButton
          title="Arttır"
          changeCounter={() => setCounter(counter + 1)}
        ></CustomButton>
        <CustomButton
          title="Azalt"
          changeCounter={() => setCounter(counter - 1)}
        ></CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignSelf: "stretch",
  },
  textcontainer: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: "#87cefa",
  },
  buttoncontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  },
});

export default CounterPage;
