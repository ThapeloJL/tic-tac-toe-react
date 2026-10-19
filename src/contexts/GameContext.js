import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { checkForWinner } from "../utils/GameUltils";
import { ModalContext } from "./ModalContext";
import RoundOver from "../components/Modals/RoundOver";
import { genConfig } from "react-nice-avatar";
import { SfxContext } from "./SfxContext";

export const GameContext = createContext({});

const toggleChoice = (choice) => (choice === "X" ? "O" : "X");

const computeRoundResult = (board, player1Choice) => {
  const symbol = checkForWinner(board);
  if (symbol) return player1Choice === symbol ? "player1" : "player2";
  if (board.every((cell) => cell !== "")) return "draw";
  return null;
};

export const GameContextProvider = (props) => {
  const { winnerSfx, completeSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const [game, setGame] = useState({
    board: Array(9).fill(""),
    player1: {
      choice: "X",
      name: "Player1",
      score: 0,
      color: "#ff2329",
      avatarConfig: genConfig(),
    },
    player2: {
      choice: "O",
      name: "Player2",
      score: 0,
      color: "#0030f3",
      avatarConfig: genConfig(),
    },
    turn: "X",
    roundWinner: "",
    winningCombo: null,
  });

  // Manual Feature Player input name

  const updatePlayerName = (player, name) => {
    setGame((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        name: name,
      },
    }));
  };

  const updateBoard = (index) => {
    setGame((prev) => {
      if (prev.board[index] || prev.roundWinner !== "") return prev;
      const board = [...prev.board];
      board[index] = prev.turn;
      return { ...prev, board, turn: prev.turn === "X" ? "O" : "X" };
    });
  };

  const resetBoard = useCallback(() => {
    setGame((prev) => ({
      ...prev,
      board: Array(9).fill(""),
      turn: "X",
      roundWinner: "",
      player1: { ...prev.player1, choice: toggleChoice(prev.player1.choice) },
      player2: { ...prev.player2, choice: toggleChoice(prev.player2.choice) },
    }));
  }, []);

  const restartGame = () => {
    setGame({
      board: Array(9).fill(""),
      player1: {
        choice: "X",
        name: "Player1",
        score: 0,
        color: "#ff2329",
        avatarConfig: genConfig(),
      },
      player2: {
        choice: "O",
        name: "Player2",
        score: 0,
        color: "#0030f3",
        avatarConfig: genConfig(),
      },
      turn: "X",
      roundWinner: "",
    });
  };

  const getRoundResults = (board) =>
    computeRoundResult(board, game.player1.choice);

  useEffect(() => {
    if (game.roundWinner) return;

    const result = computeRoundResult(game.board, game.player1.choice);
    if (!result) return;

    if (result === "draw") completeSfx();
    else winnerSfx();
    setGame((prev) => ({
      ...prev,
      roundWinner: result,
      ...(result !== "draw" && {
        [result]: { ...prev[result], score: prev[result].score + 1 },
      }),
    }));
    handleModal(
      <RoundOver
        onContinue={resetBoard}
        result={result}
        restartGame={restartGame}
      />,
    );
  }, [
    game.board,
    game.player1.choice,
    game.roundWinner,
    handleModal,
    resetBoard,
    winnerSfx,
    completeSfx,
  ]);

  return (
    <GameContext.Provider
      value={{
        updateBoard,
        resetBoard,
        getRoundResults,
        game,
        restartGame,
        updatePlayerName,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
