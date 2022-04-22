import { GET_MAIL, SET_SEARCH, SET_TAG } from "./actionType";

const init = {
  mails: [],
  tags: "inbox",
  searchTerm: "",
};

export const MailReducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_MAIL:
      return {
        ...store,
        mails: payload,
      };
    case SET_SEARCH:
      return {
        ...store,
        searchTerm: payload,
      };
    case SET_TAG:
      return {
        ...store,
        tags: payload,
      };
    default:
      return store;
  }
};
