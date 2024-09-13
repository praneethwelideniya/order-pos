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
  onUpdateQuantity: (item: Product, value: number) => void;
  discount: number;
}

const OrderItem: FC<OrderItemProps> = memo(
  ({ item, quantity, onUpdateQuantity, discount }) => {
    //
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.product}>{item.name}</Text>
          <QuantityAdjuster
            quantity={quantity}
            onIncrease={() => {
              onUpdateQuantity(item, quantity + 1);
            }}
            onDecrease={() => {
              onUpdateQuantity(item, quantity - 1);
            }}
          />
        </View>
        <PriceText
          currency={Currency.DOLLAR}
          price={parseFloat(item.price) * quantity}
          discountPrice={discount}
        />
      </View>
    );
  }
);

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  product: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.light.productText,
    width: "50%",
  },
});
