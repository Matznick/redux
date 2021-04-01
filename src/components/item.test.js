import React from "react";
import fetchMock from "fetch-mock";
import ReactDOM from "react-dom";
import Item from "./Item";

describe("fetch item and render it correctly", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("renders without error", async () => {
    fetchMock.get("https://someUrl", [
      {
        name: "I am an item",
      },
    ]);

    const response = await fetch("https://someUrl");
    let myJson = await response.json();
    console.log(myJson);

    const div = document.createElement("div");

    ReactDOM.render(
      myJson.map((el, i) => {
        return <Item key={i} item={el} />;
      }),
      div
    );
  });
});
