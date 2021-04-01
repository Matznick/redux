import configureMockStore from "redux-mock-store";
import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILED, getItems } from "./getItems";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
fetchMock.get(
  "/items",
  {
    name: "Mediocre Iron Watch",
    priceInCents: 399,
    id: 1,
  },
  {
    name: "Heavy Duty Concrete Plate",
    priceInCents: 499,
    id: 2,
  },
  {
    name: "Intelligent Paper Knife",
    priceInCents: 1999,
    id: 3,
  }
);

const store = mockStore({ items: [] });

describe("Test async actions getItems", () => {
  it("fetch items", async () => {
    fetchMock.get("/items", [
      {
        name: "Mediocre Iron Watch",
        priceInCents: 399,
        id: 1,
      },
      {
        name: "Heavy Duty Concrete Plate",
        priceInCents: 499,
        id: 2,
      },
      {
        name: "Intelligent Paper Knife",
        priceInCents: 1999,
        id: 3,
      },
    ]);
    const expectedActions = [
      { type: FETCH_ITEMS_FAILED },
      {
        type: FETCH_ITEMS_SUCCESS,
        items: [],
      },
    ];
    await store.dispatch(getItems());

    expect(store.getActions()).toEqual(expectedActions);
  });
});

// hier weiter
