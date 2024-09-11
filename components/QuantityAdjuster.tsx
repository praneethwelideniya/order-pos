import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface QuantityAdjusterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minQuantity?: number;
}

export const QuantityAdjuster: React.FC<QuantityAdjusterProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  minQuantity = 0,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onDecrease}
        disabled={quantity <= minQuantity}
        style={[
          styles.button,
          styles.decreaseButton,
          quantity <= minQuantity && styles.buttonDisabled,
        ]}
        testID="decreaseButton"
      >
        <Ionicons
          name="remove"
          size={20}
          color={quantity <= minQuantity ? Colors.light.border : undefined}
        />
      </TouchableOpacity>
      <Text style={[styles.quantityText]}>{quantity}</Text>
      <TouchableOpacity
        onPress={onIncrease}
        style={[styles.button, styles.increaseButton]}
        testID="increaseButton"
      >
        <Ionicons name="add" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.light.quantityAdjusterBg,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  button: {
    padding: 10,
    backgroundColor: Colors.light.quantityAdjusterBg,
  },
  decreaseButton: { borderTopStartRadius: 25, borderBottomStartRadius: 25 },
  increaseButton: { borderTopEndRadius: 25, borderBottomEndRadius: 25 },
  buttonDisabled: {
    opacity: 0.5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});
