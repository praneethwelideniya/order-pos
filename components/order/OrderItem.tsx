import { View, Text, StyleSheet } from "react-native";
import React, { FC, memo } from "react";
import QuantityAdjuster from "@/components/QuantityAdjuster";
import PriceText from "@/components/PriceText";
import { Product } from "@/types/Product";
import { Currency } from "@/constants/Currency";
import { Colors } from "@/constants/Colors";

interface OrderItemProps {
  item: Product;
  quantity: number;
  onUpdateQuantity: (id: number, value: number) => void;
}

const OrderItem: FC<OrderItemProps> = memo(
  ({ item, quantity, onUpdateQuantity }) => {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.product}>{item.name}</Text>
          <QuantityAdjuster
            quantity={quantity}
            onIncrease={() => {
              onUpdateQuantity(item.id, quantity + 1);
            }}
            onDecrease={() => {
              onUpdateQuantity(item.id, quantity - 1);
            }}
          />
        </View>
        <PriceText currency={Currency.DOLLAR} price={parseFloat(item.price)} />
      </View>
    );
  }
);

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  product: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.light.productText,
    width: "50%",
  },
});
