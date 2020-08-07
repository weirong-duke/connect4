import { Color } from "../../types";
import { Action } from "../../actions/types";
import { dropCoin } from "./dropCoin";
import { getInitialBoard } from "./getInitialBoard";
import {ResetBoardAction} from '../../actions/reset';
import {resetBoardFunction} from "./resetBoard";

export type BoardState = Color[][];

const initialState: BoardState = getInitialBoard();

export const reducer = (
  state: BoardState = initialState,
  action: Action | ResetBoardAction
): BoardState => {
  console.log('reducer section', action)
  let returnState: BoardState = initialState;
  switch (action.type) {
    case "DROP_COIN":
      const { column, color } = (action as Action).payload;
      return dropCoin(state, column, color);
    case "RESET_BOARD":
      return resetBoardFunction();
    default:
      return state;
  }
};
