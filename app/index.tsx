import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { Alert, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const resetOrder = () => {
    Alert.alert("Reset order", "Are you sure you want to reset the order?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {},
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
});
