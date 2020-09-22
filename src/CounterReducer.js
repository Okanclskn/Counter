import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./components/CustomButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrase":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [counter, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>{counter.count}</Text>
      </View>

      <View style={styles.buttoncontainer}>
        <CustomButton
          title="Arttır"
          changeCounter={() => dispatch({ type: "increment", payload: 1 })}
        ></CustomButton>
        <CustomButton
          title="Azalt"
          changeCounter={() => dispatch({ type: "decrase", payload: 1 })}
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

export default CounterReducer;
