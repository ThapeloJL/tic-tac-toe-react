import { createContext, useState } from "react";
import { checkForWinner } from "../utils/GameUltils";
export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: Array(9).fill(""),
    player1: {
      choice: "X",
      name: "a",
    },
    player2: {
      choice: "O",
      name: "b",
    },
    turn: "X",
  });

  const winner = checkForWinner(game.board) ? (game.turn === "X" ? "O" : "X") : (null)

  // const updateBoard = (index) => {
  //   let updatedBoard = game.board;
  //   updatedBoard[index] = game.turn;
  //   setGame({
  //     ...game,
  //     board: updatedBoard,
  //     turn: game.turn === "X" ? "O" : "X",
  //   });
  const updateBoard = (index) => {
    if (game.board[index] !== "" || winner) return;
    const board = [...game.board];
    board[index] = game.turn;
    setGame({
      ...game,
      board,
      turn: game.turn === "X" ? "O" : "X",
    });
  };

  return (
    <GameContext.Provider value={{ game, updateBoard , winner}}>
      {props.children}
    </GameContext.Provider>
  );
};
