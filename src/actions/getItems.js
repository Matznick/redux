export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILED = "FETCH_ITEMS_FAILED";

export const getItems = () => {
  return (dispatch) => {
    dispatch(fetchItemRequest());
    return fetch(`http://localhost:8082/api/products`)
      .then((response) => response.json())
      .then((items) =>
        dispatch({
          type: FETCH_ITEMS_SUCCESS,
          payload: items,
        })
      )
      .catch((err) =>
        dispatch({
          type: FETCH_ITEMS_FAILED,
          payload: err,
        })
      );
  };
};
export const fetchItemRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  };
};
