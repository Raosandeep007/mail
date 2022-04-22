import { GET_MAIL, SET_SEARCH_MAIL, SET_TAG } from "./actionType";

const init = {
  mails: [],
};

export const MailReducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_MAIL:
      return {
        ...store,
        mails: payload,
      };
    case SET_SEARCH_MAIL:
      return {
        ...store,
        mails: payload,
      };
    case SET_TAG:
      return {
        ...store,
        // filter mails by tag
        mails: store.mails.filter((mail) => mail.tag === payload),
      };
    default:
      return store;
  }
};
