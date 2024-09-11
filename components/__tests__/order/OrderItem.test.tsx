import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import OrderItem from "@/components/order/OrderItem";
import { Product } from "@/types/Product";

const mockProduct: Product = {
  id: 1,
  name: "Test Product",
  price: "10.00",
};

const mockOnUpdateQuantity = jest.fn();

describe("OrderItem Component", () => {
  it("renders correctly", () => {
    const { toJSON } = render(
      <OrderItem
        item={mockProduct}
        quantity={1}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("displays the product name", () => {
    const { getByText } = render(
      <OrderItem
        item={mockProduct}
        quantity={1}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    expect(getByText("Test Product")).toBeTruthy();
  });

  it("displays the correct quantity", () => {
    const { getByText } = render(
      <OrderItem
        item={mockProduct}
        quantity={2}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    expect(getByText("2")).toBeTruthy();
  });

  it("displays the correct price", () => {
    const { getByText } = render(
      <OrderItem
        item={mockProduct}
        quantity={1}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    expect(
      getByText(`$${parseFloat(mockProduct.price).toFixed(2)}`)
    ).toBeTruthy();
  });
});
