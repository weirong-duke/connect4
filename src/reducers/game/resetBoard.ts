import { BoardState } from "./board";
import { Color } from "../../types";
import {getInitialBoard} from "./getInitialBoard";

export const resetBoardFunction = () => {
  return getInitialBoard();
}
