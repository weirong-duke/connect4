import { reducer as board } from "./board";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  board
});

export type LocalState = ReturnType<typeof reducer>;
