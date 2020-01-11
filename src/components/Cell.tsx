import { Color } from "../types";

import React from "react";
import cn from "classnames";

interface Props {
  color: Color;
  onClick: () => void;
}

export const Cell: React.FunctionComponent<Props> = ({ color, onClick }) => {
  const classes = cn("Game-Cell", color);

  return <div onClick={onClick} className={classes}></div>;
};
