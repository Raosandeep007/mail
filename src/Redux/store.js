import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { MailReducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(MailReducer, applyMiddleware(thunk));
