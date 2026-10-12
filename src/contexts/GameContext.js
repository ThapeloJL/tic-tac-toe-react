import { createContext, useContext, useEffect, useState } from "react";
import { checkForWinner } from "../utils/GameUltils";
import { ModalContext } from "./ModalContext";
import RoundOver from "../components/Modals/RoundOver";
import { genConfig } from "react-nice-avatar";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: Array(9).fill(""),
    player1: {
      choice: "X",
      name: "Tshepang",
      score: 0,
      color : "#ff2329",
      avatarConfig : genConfig(),
    },
    player2: {
      choice: "O",
      name: "Matshidiso",
      score: 0,
      color : "#0030f3",
      avatarConfig : genConfig(),
    },
    turn: "X",
    roundWinner : ""
  });

  // const winner = checkForWinner(game.board) ? (game.turn === "X" ? "O" : "X") : (null);

  // const updateBoard = (index) => {
  //   let updatedBoard = game.board;
  //   updatedBoard[index] = game.turn;
  //   setGame({
  //     ...game,
  //     board: updatedBoard,
  //     turn: game.turn === "X" ? "O" : "X",
  //   });

  const updateBoard = (index) => {
    setGame((prev) => {
      if (prev.board[index] !== "") return prev;
      const board = [...prev.board];
      board[index] = prev.turn;
      return { ...prev, board, turn: prev.turn === "X" ? "O" : "X" };
    });
  };

  const { handleModal } = useContext(ModalContext);

  const toggleChoice = (choice) => (choice === "X" ? "O" : "X");

  const resetBoard = () => {
    setGame((prev) => ({
      ...prev,
      board: Array(9).fill(""),
      turn: "X",
      player1: { ...prev.player1, choice: toggleChoice(prev.player1.choice) },
      player2: { ...prev.player2, choice: toggleChoice(prev.player2.choice) },
    }));
  };

  const getRoundResults = (board) => {
    //winner player1 , player2 ,draw 
    const symbol = checkForWinner(board);
    if (symbol) {
      return game.player1.choice === symbol ? "player1" : "player2";
    }
    if (board.every((cell) => cell !== "")) return "draw";
    return null;
  };

  // const onContinue = () => {
  //   resetBoard();
  // };

  useEffect(() => {
    const result = getRoundResults(game.board);
    if (!result) return;
    if (result !== "draw") {
      setGame((prev) => ({
        ...prev,
        [result]: { ...prev[result], score: prev[result].score + 1 },
      }));
    }
      handleModal(<RoundOver onContinue={resetBoard} result={result} />);
  }, [game.board]);

  return (
    <GameContext.Provider
      value={{ updateBoard, resetBoard, getRoundResults, game }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
