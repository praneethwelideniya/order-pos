import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "@/components/Button";

describe("Button", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      <Button onPress={() => {}} title="New order" />
    );
    expect(getByText("New order")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} title="New order" />
    );
    fireEvent.press(getByText("New order"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("matches snapshot with default props", () => {
    const tree = render(
      <Button onPress={() => {}} title="New order" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
