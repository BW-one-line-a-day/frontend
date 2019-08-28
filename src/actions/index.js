import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";

export const postData = item => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .post(
        "https://cesar-buildweek-onelineaday.herokuapp.com/api/dailyposts",
        item
      )
      .then(response => {
        console.log("MESSAGE", response.data.message);
        dispatch({ type: POST_DATA_SUCCESS, payload: response.data.message });

        // getData()(dispatch);
      })
      .catch(error => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.response });
      });
  };
};

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get("https://cesar-buildweek-onelineaday.herokuapp.com/api/dailyposts")
      .then(response => {
        console.log("actions response", response.data);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.response });
      });
  };
};

export const deleteData = item => {
  axios
    .delete(
      `https://cesar-buildweek-onelineaday.herokuapp.com/api/dailyposts/${item.id}`
    )

    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    });
};
