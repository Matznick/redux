import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";

describe("Nav test", () => {
  it("render Nav correctly", () => {
    const wrapper = shallow(<Nav.WrappedComponent />);
    expect(wrapper.find(".nav")).toHaveLength(1);
  });
});
