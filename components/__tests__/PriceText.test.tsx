import React from "react";
import { render } from "@testing-library/react-native";
import PriceText from "@/components/PriceText";

describe("PriceText", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(<PriceText price={10} />);
    expect(getByText("$10.00")).toBeTruthy();
  });

  it("renders correctly with custom currency", () => {
    const { getByText } = render(<PriceText price={10} currency={"€"} />);
    expect(getByText("€10.00")).toBeTruthy();
  });

  it("renders correctly with medium size", () => {
    const { getByText } = render(<PriceText price={10} size="medium" />);
    const textElement = getByText("$10.00");
    expect(textElement.props.style).toContainEqual({ fontSize: 30 });
  });

  it("renders correctly with small size", () => {
    const { getByText } = render(<PriceText price={10} size="small" />);
    const textElement = getByText("$10.00");
    expect(textElement.props.style).toContainEqual({ fontSize: 20 });
  });

  it("formats price to two decimal places", () => {
    const { getByText } = render(<PriceText price={10.5} />);
    expect(getByText("$10.50")).toBeTruthy();
  });

  it("matches snapshot with default props", () => {
    const tree = render(<PriceText price={10} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches snapshot with medium size", () => {
    const tree = render(<PriceText price={10} size="medium" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
