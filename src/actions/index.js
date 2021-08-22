import { formValues } from "redux-form";
import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getStore) => {
  const response = await streams.post("/streams", formValues);

  dispatch({
    action: "CREATE_STREAM",
    payload: response.data,
  });
};

export const fetchStreams = () => async (dispatch, getStore) => {
  const response = await streams.get("/streams");

  dispatch({
    action: "FETCH_STREAMS",
    paylolad: response.data,
  });
};

export const fetchStream = (id) => async (dispatch, getStore) => {
  const response = await streams.get(`/stream/${id}`);

  dispatch({
    action: "FETCH_STREAM",
    payload: response.data,
  });
};

export const editStream = (id, formValues) => async (dispatch, getStore) => {
  const response = await streams.put(`/stream/${id}`);

  dispatch({
    action: "UPDATE_STREAM",
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch, getStore) => {
  await streams.delete(`/stream/${id}`);

  dispatch({
    action: "DELETE_STREAM",
    payload: id,
  });
};
