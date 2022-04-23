import { GET_MAIL } from "./actionType";

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

    default:
      return store;
  }
};
