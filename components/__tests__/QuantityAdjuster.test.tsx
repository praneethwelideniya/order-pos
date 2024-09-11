import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import QuantityAdjuster from "@/components/QuantityAdjuster";

describe("QuantityAdjuster", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      <QuantityAdjuster
        quantity={1}
        onIncrease={() => {}}
        onDecrease={() => {}}
      />
    );
    expect(getByText("1")).toBeTruthy();
  });

  it("calls onIncrease when increase button is pressed", () => {
    const onIncreaseMock = jest.fn();
    const { getByTestId } = render(
      <QuantityAdjuster
        quantity={1}
        onIncrease={onIncreaseMock}
        onDecrease={() => {}}
      />
    );
    fireEvent.press(getByTestId("increaseButton"));
    expect(onIncreaseMock).toHaveBeenCalled();
  });

  it("calls onDecrease when decrease button is pressed", () => {
    const onDecreaseMock = jest.fn();
    const { getByTestId } = render(
      <QuantityAdjuster
        quantity={1}
        onIncrease={() => {}}
        onDecrease={onDecreaseMock}
      />
    );
    fireEvent.press(getByTestId("decreaseButton"));
    expect(onDecreaseMock).toHaveBeenCalled();
  });

  it("disables decrease button when quantity is at minQuantity", () => {
    const { getByTestId } = render(
      <QuantityAdjuster
        quantity={0}
        onIncrease={() => {}}
        onDecrease={() => {}}
        minQuantity={0}
      />
    );
    const decreaseButton = getByTestId("decreaseButton");
    expect(decreaseButton.props.accessibilityState.disabled).toBe(true);
  });

  it("matches snapshot", () => {
    const tree = render(
      <QuantityAdjuster
        quantity={1}
        onIncrease={() => {}}
        onDecrease={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
