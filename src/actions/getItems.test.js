import configureMockStore from "redux-mock-store";
import * as actions from "./getItems";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Test async action getItems", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should dispatch FETCH_ITEMS_SUCCESS", async () => {
    const items = [
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
    ];

    fetchMock.get("http://localhost:8082/api/products", items);

    const expectedActions = [
      { type: actions.FETCH_ITEMS_REQUEST },
      {
        type: actions.FETCH_ITEMS_SUCCESS,
        payload: items,
      },
    ];

    const store = mockStore({ itemsReducer: [] });
    return store.dispatch(actions.getItems()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should dispatch FETCH_ITEMS_FAILED", async () => {
    fetchMock.get("http://localhost:8082/api/products", { throws: Error });

    const expectedActions = [
      { type: actions.FETCH_ITEMS_REQUEST },
      { type: actions.FETCH_ITEMS_FAILED, payload: Error },
    ];
    const store = mockStore({ itemsReducer: [] });

    return store.dispatch(actions.getItems()).then(() => {
      const actionsFromStore = store.getActions();

      expect(actionsFromStore).toEqual(expectedActions);
    });
  });
});
// npm i node-fetch
