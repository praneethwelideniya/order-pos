import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  title: string;
}

const Button: FC<ButtonProps> = ({ onPress, style, title }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: Colors.light.buttonText,
    fontSize: 20,
    fontWeight: "bold",
  },
});
