import React from "react";
import { render } from "@testing-library/react-native";
import OrderTotal from "@/components/order/OrderTotal";

describe("OrderTotal Component", () => {
  it("renders correctly with given total", () => {
    const { getByText } = render(<OrderTotal total={100} />);

    expect(getByText("Total")).toBeTruthy();
    expect(getByText("$100.00")).toBeTruthy();
  });

  it("matches snapshot", () => {
    const { toJSON } = render(<OrderTotal total={100} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("applies correct styles", () => {
    const { getByText } = render(<OrderTotal total={100} />);
    const totalText = getByText("Total");

    expect(totalText.props.style).toEqual({
      fontWeight: "bold",
      fontSize: 32,
    });
  });
});
