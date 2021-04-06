import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);

describe("Nav test", () => {
  it("click sendToRedux button", () => {
    const store = mockstore({});

    const wrapper = shallow(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
    const wrap = wrapper.find("Connect(Nav)");
    console.log("wrap is : ", wrap);
    expect(wrap).toHaveLength(1);
  });
});
