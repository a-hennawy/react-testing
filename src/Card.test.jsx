import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card />);
});

it("Matches snapshot", () => {
  const { asFragment } = render(
    <Card caption="Test card" src="test1.com" currNum={1} totalNum={3} />
  );
  expect(asFragment()).toMatchSnapshot();
});
