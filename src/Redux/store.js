import { applyMiddleware, compose } from "redux";
import { createStore } from "redux";
import { MailReducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(
  MailReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
