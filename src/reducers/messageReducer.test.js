import messageReducer from "./messageReducer";

import deepFreeze from "deep-freeze";

describe("reducerTest", () => {
  it("should return the initial state", () => {
    expect(messageReducer(undefined, {})).toEqual({
      message: "nein",
    });
  });

  const UPDATE_MESSAGE = "UPDATE_MESSAGE";
  it("should handle UPDATE_MESSAGE", () => {
    const currentState = { message: "nein" };
    deepFreeze(currentState);

    expect(
      messageReducer(currentState, {
        type: UPDATE_MESSAGE,
        payload: "ja",
      })
    ).toEqual({
      message: "ja",
    });
  });
});
