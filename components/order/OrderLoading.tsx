import { Colors } from "@/constants/Colors";
import { FC } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface OrderLodingProps {
  loading: boolean;
  error?: string;
}

const OrderLoding: FC<OrderLodingProps> = ({ loading, error }) => {
  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          color={Colors.light.primary}
          testID="activityIndicator"
        />
      )}
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default OrderLoding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
