import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";

describe("render an item correctly", () => {
  it("renders without error", () => {
    const items = [
      {
        name: "a shoe",
      },
    ];

    const div = document.createElement("div");

    ReactDOM.render(
      items.map((el, i) => {
        return <Item key={i} item={el} />;
      }),
      div
    );
  });
});
