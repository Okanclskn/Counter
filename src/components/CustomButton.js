import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, changeCounter }) => {
  return (
    <TouchableOpacity onPress={() => changeCounter()}>
      <View style={styles.button}>
        <Text style={styles.buttontext}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#87cefa",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 25,
  },
  buttontext: {
    color: "white",
    fontSize: 18,
  },
});
export default CustomButton;
