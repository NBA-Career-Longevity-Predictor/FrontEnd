import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_NBA_DATA_START = "GET_NBA_DATA_START";
export const GET_NBA_DATA_SUCCESS = "GET_NBA_DATA_SUCCESS";
export const GET_NBA_DATA_FAILURE = "GET_NBA_DATA_FAILURE";

export const getData = () => {
    return dispatch => {
      dispatch({ type: GET_NBA_DATA_START });
      axiosWithAuth()
        .get()
        .then(res => {
          dispatch({ type: GET_NBA_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: GET_NBA_DATA_FAILURE, payload: err.response });
        });
    };
  };

export const POST_NBA_DATA_START = "POST_NBA_DATA_START";
export const POST_NBA_DATA_SUCCESS = "POST_NBA_DATA_SUCCESS";
export const POST_NBA_DATA_FAILURE = "POST_NBA_DATA_FAILURE";

export const postData = () => {
    return dispatch => {
      dispatch({ type: POST_NBA_DATA_START });
      axiosWithAuth()
        .post()
        .then(res => {
          dispatch({ type: POST_NBA_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: POST_NBA_DATA_FAILURE, payload: err.response });
        });
    };
  };

export const UPDATE_NBA_DATA_START = "UPDATE_NBA_DATA_START";
export const UPDATE_NBA_DATA_SUCCESS = "UPDATE_NBA_DATA_SUCCESS";
export const UPDATE_NBA_DATA_FAILURE = "UPDATE_NBA_DATA_FAILURE";

export const updateData = () => {
    return dispatch => {
      dispatch({ type: UPDATE_NBA_DATA_START });
      axiosWithAuth()
        .put()
        .then(res => {
          dispatch({ type: UPDATE_NBA_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: UPDATE_NBA_DATA_FAILURE, payload: err });
        });
    };
  };

export const DELETE_NBA_DATA_START = " DELETE_NBA_DATA_START";
export const DELETE_NBA_DATA_SUCCESS = "DELETE_NBA_DATA_SUCCESS";
export const DELETE_NBA_DATA_FAILURE = "DELETE_NBA_DATA_FAILURE";

export const deleteData = id => {
  return dispatch => {
    dispatch({ type: DELETE_NBA_DATA_START })
      .delete()
      .then(res => {
        dispatch({ type: DELETE_NBA_DATA_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: DELETE_NBA_DATA_FAILURE });
      });
  };
};