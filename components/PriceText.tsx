import { Currency } from "@/constants/Currency";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface PriceTextProps {
  price: number;
  currency?: string;
  size?: "small" | "medium";
  discountPrice: number;
}

const PriceText: FC<PriceTextProps> = ({
  price,
  currency = Currency.DOLLAR,
  size = "small",
  discountPrice,
}) => {
  return (
    <View>
      <Text
        style={[styles.priceText, { fontSize: size === "small" ? 20 : 30 }]}
      >{`${currency}${(price - discountPrice).toFixed(2)} `}</Text>

      {discountPrice > 0 && (
        <Text
          style={[
            styles.priceText,
            {
              fontSize: size === "small" ? 15 : 20,
              textDecorationLine: "line-through",
            },
          ]}
        >{`${currency}${price.toFixed(2)}`}</Text>
      )}
    </View>
  );
};

export default PriceText;

const styles = StyleSheet.create({
  priceText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
