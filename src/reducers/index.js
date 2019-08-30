import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_DATA_SUCCESS
} from "../actions";

// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// let todayDate = month + day + year;

const initialState = {
  isLoading: false,
  post: [],
  error: "",
  createdMessage: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: "",
        createdMessage: false
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        post: action.payload
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        createdMessage: true
      };
    default:
      return state;
  }
};
