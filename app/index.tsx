import Button from "@/components/Button";
import OrderItem from "@/components/order/OrderItem";
import OrderLoding from "@/components/order/OrderLoading";
import OrderTotal from "@/components/order/OrderTotal";
import { Colors } from "@/constants/Colors";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/Product";
import { useCallback, useMemo, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";

const discount = 0.5;
const disCountLogic = "butTwoGetOneHalfPrice";

export default function HomeScreen() {
  const { products, error, loading, refetch } = useProducts();

  const [orderedItems, setOrderedItems] = useState<{
    [key: number]: { quantity: number; discount: number };
  }>({});

  const updateQuantity = useCallback((id: number, newQuantity: number) => {
    let halfPriceLogic = 0;

    // need to seperate to another function with discount logic
    if (disCountLogic == "butTwoGetOneHalfPrice") {
      halfPriceLogic = Math.floor(newQuantity / 3);
    }

    setOrderedItems((prevItems) => {
      if (newQuantity === 0) {
        const { [id]: _, ...rest } = prevItems;
        return rest;
      }
      return {
        ...prevItems,
        [id]: { quantity: newQuantity, discount: halfPriceLogic },
      };
    });
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <OrderItem
        item={item}
        quantity={orderedItems[item.id] ? orderedItems[item.id].quantity : 0}
        discount={
          orderedItems[item.id]
            ? orderedItems[item.id].discount * parseFloat(item.price) * discount
            : 0
        }
        onUpdateQuantity={updateQuantity}
      />
    ),
    [orderedItems, updateQuantity]
  );

  const totalPrice = useMemo(() => {
    return Object.entries(orderedItems).reduce(
      (sum, [id, prod]) => {
        const product = products.find((p) => p.id === parseInt(id));

        return {
          totalPrice: product
            ? sum.totalPrice + prod.quantity * parseFloat(product.price)
            : sum.totalPrice,
          discount: product
            ? (prod.discount * parseFloat(product.price)) / 2
            : 0,
        };
      },
      { totalPrice: 0, discount: 0 }
    );
  }, [orderedItems, products]);

  const resetOrder = () => {
    Alert.alert("Reset order", "Are you sure you want to reset the order?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          refetch();
          setOrderedItems({});
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={resetOrder}
        style={styles.orderButton}
        title="New order"
      />
      <FlatList
        data={products}
        ListEmptyComponent={<OrderLoding loading={loading} error={error} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <OrderTotal
        total={totalPrice.totalPrice}
        discount={totalPrice.discount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  orderButton: {
    backgroundColor: Colors.light.primary,
    height: 56,
    marginHorizontal: 15,
    marginTop: 15,
  },
  listContainer: {
    padding: 15,
  },
});
