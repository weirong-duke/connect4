import React, {FC, useEffect, useState} from "react";
import cn from "classnames";
import { connect, DispatchProp} from "react-redux";
import { RootState } from "../reducers";
import { getBoard, getCurrentPlayer, getWinner } from "../reducers/selectors";
import { Row } from "./Row";
import { dropCoin } from "../actions/dropCoin";
import {resetBoard} from '../actions/reset'
import { Color } from "../types";

interface Props {
  board: ReturnType<typeof getBoard>;
  color: ReturnType<typeof getCurrentPlayer>;
  winner: ReturnType<typeof getWinner>;
  dropCoin: typeof dropCoin;
  resetBoard: typeof resetBoard;
}

type BoardComponentProps = Props;
const BoardComponent: FC<BoardComponentProps> = ({board, color, winner, dropCoin, resetBoard}) => {
  const [redWins, setRedWins] = useState<number>(0);
  const [yellowWins, setYellowWins] = useState<number>(0);
  console.log('winnder', winner);

  useEffect(() => {
    if (winner) {
      if (winner.color === 'yellow') {
        setYellowWins(wins => wins +1);
      } else if (winner.color === 'red') {
        setRedWins(wins => wins + 1);
      }
    }
  }, [winner])

  const dropCoinComponent = (column: number) => () => {
    // we only allow a player to drop a coin if there is no winner yet
    if (!winner) {
      dropCoin(column, color);
    }
  };

  const displayHeader = () => {
    // only display the winner if there is one
    if (winner) {
      return <h2>Congratulations, {winner.color} wins the game!</h2>;
    } else {
      return <h2>It's {color}'s turn to play</h2>;
    }
  }

  const displayRow =  (colors: Color[], key: number) => {
    return (
      <Row
        row={key}
        dropCoin={dropCoinComponent}
        colors={colors}
        key={`column-${key}`}
        winner={winner}
      />
    );
  };

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    resetBoard();
  };

  const classes = cn("Game-Board");
  const buttonText = winner ? 'Play Again' : 'Start Over';
  const buttonClass = winner ? 'winner' : '';
  return (
    <>
      {displayHeader()}

      <div className="Game">
        <div className={classes}>{board.map(displayRow)}</div>
      </div>
      <button type="button" className={`Game-Board__button ${buttonClass}`} onClick={handleClickButton}>{buttonText}</button>
      <div className={"Game-Board__table"}>
        <table className="Game-Board__results">
          <thead>
          <tr><td>Red</td><td>Yellow</td></tr>
          </thead>
          <tbody>
          <tr>
            <td>{redWins} win{redWins === 1 ? '' : 's'}</td>
            <td>{yellowWins} win{yellowWins === 1 ? '' : 's'}</td>
          </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}

const mapState = (state: RootState) => ({
  board: getBoard(state),
  color: getCurrentPlayer(state),
  winner: getWinner(state)
});

export const Board = connect(mapState, { dropCoin, resetBoard })(BoardComponent);
