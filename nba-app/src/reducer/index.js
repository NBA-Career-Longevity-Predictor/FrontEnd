import {
  GET_NBA_DATA_START,
  GET_NBA_DATA_SUCCESS,
  GET_NBA_DATA_FAILURE,
  POST_NBA_DATA_START,
  POST_NBA_DATA_SUCCESS,
  POST_NBA_DATA_FAILURE,
  DELETE_NBA_DATA_START,
  DELETE_NBA_DATA_SUCCESS,
  DELETE_NBA_DATA_FAILURE
} from "../actions/index";

const initialState = {
    data: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NBA_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case GET_NBA_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload
      };
    case GET_NBA_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to load your friend's list at this time: ${action.payload}`
      };
    case POST_NBA_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case POST_NBA_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload
      };
    case POST_NBA_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to post to your friend's list at this time: ${action.payload}`
      };
    case DELETE_NBA_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DELETE_NBA_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload
      };
    case DELETE_NBA_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to delete from your friend's list at this time: ${action.payload}`
      };
    default:
      return state;
  }
};