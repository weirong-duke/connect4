import React from "react";
import cn from "classnames";

import { Cell } from "./Cell";
import { Color } from "./types";

interface Props {
  colors: Color[];
  dropCoin: (column: number) => () => void;
}

export const Row: React.FunctionComponent<Props> = ({ colors, dropCoin }) => {
  const classes = cn("Game-Row");

  const cellComponents = colors.map((color, index) => (
    <Cell onClick={dropCoin(index)} color={color} key={`cell-${index}`} />
  ));

  return <div className={classes}>{cellComponents}</div>;
};
