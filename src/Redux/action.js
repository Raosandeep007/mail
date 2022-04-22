import { GET_MAIL, SET_SEARCH, SET_TAG } from "./actionType";

export const getMail = (payload) => ({
  type: GET_MAIL,
  payload,
});

export const setSearchkey = (payload) => ({
  type: SET_SEARCH,
  payload,
});

export const setTag = (payload) => ({
  type: SET_TAG,
  payload,
});
