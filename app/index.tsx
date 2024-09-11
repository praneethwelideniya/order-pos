import Button from "@/components/Button";
import OrderItem from "@/components/order/OrderItem";
import OrderLoding from "@/components/order/OrderLoading";
import { Colors } from "@/constants/Colors";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/Product";
import { Alert, FlatList, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const { products, error, loading, refetch } = useProducts();
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
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <OrderItem item={item} quantity={0} onUpdateQuantity={() => {}} />
  );

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
