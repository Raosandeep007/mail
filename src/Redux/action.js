import { GET_MAIL, SET_SEARCH_MAIL, SET_TAG } from "./actionType";

export const getMail = (payload) => ({
  type: GET_MAIL,
  payload,
});

export const setSearchMail = (payload) => ({
  type: SET_SEARCH_MAIL,
  payload,
});

export const setTag = (payload) => ({
  type: SET_TAG,
  payload,
});
