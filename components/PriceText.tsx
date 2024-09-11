import { Currency } from "@/constants/Currency";
import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

interface PriceTextProps {
  price: number;
  currency?: string;
  size?: "small" | "medium";
}

const PriceText: FC<PriceTextProps> = ({
  price,
  currency = Currency.DOLLAR,
  size = "small",
}) => {
  return (
    <Text
      style={[styles.priceText, { fontSize: size === "small" ? 20 : 30 }]}
    >{`${currency}${price.toFixed(2)}`}</Text>
  );
};

export default PriceText;

const styles = StyleSheet.create({
  priceText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
