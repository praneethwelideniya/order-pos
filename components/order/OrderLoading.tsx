import { Colors } from "@/constants/Colors";
import { FC } from "react";
import { ActivityIndicator, Text, View } from "react-native";

interface OrderLodingProps {
  loading: boolean;
  error?: string;
}

const OrderLoding: FC<OrderLodingProps> = ({ loading, error }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
