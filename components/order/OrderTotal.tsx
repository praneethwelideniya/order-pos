import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import PriceText from "@/components/PriceText";
import { Currency } from "@/constants/Currency";
import { Colors } from "@/constants/Colors";

interface OrderTotalProps {
  total: number;
}

const OrderTotal: FC<OrderTotalProps> = ({ total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total</Text>
      <PriceText currency={Currency.DOLLAR} price={total} size="medium" />
    </View>
  );
};

export default OrderTotal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: Colors.light.border,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  total: { fontWeight: "bold", fontSize: 32 },
});
