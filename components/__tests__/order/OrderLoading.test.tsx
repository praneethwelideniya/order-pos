import React from "react";
import { render } from "@testing-library/react-native";
import OrderLoading from "../../order/OrderLoading";

describe("OrderLoading Component", () => {
  it("renders correctly when loading is true", () => {
    const { toJSON, getByTestId } = render(
      <OrderLoading loading={true} error="" />
    );
    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId("activityIndicator")).toBeTruthy();
  });

  it("renders correctly when there is an error", () => {
    const errorMessage = "Something went wrong";
    const { toJSON, getByText } = render(
      <OrderLoading loading={false} error={errorMessage} />
    );
    expect(toJSON()).toMatchSnapshot();
    expect(getByText(errorMessage)).toBeTruthy();
  });

  it("renders correctly when loading is false and no error", () => {
    const { toJSON } = render(<OrderLoading loading={false} error="" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
