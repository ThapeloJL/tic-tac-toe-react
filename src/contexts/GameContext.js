import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { checkForWinner } from "../utils/GameUltils";
import getComputerMove from "../utils/GameUltils/getComputerMove";
import { ModalContext } from "./ModalContext";
import RoundOver from "../components/Modals/RoundOver";
import { genConfig } from "react-nice-avatar";
import { SfxContext } from "./SfxContext";

export const GameContext = createContext({});

export const GAME_MODES = {
  TWO_PLAYERS: "twoPlayers",
  VS_COMPUTER: "vsComputer",
};

const toggleChoice = (choice) => (choice === "X" ? "O" : "X");

const computeRoundResult = (board, player1Choice) => {
  const symbol = checkForWinner(board);
  if (symbol) return player1Choice === symbol ? "player1" : "player2";
  if (board.every((cell) => cell !== "")) return "draw";
  return null;
};

const createInitialGameState = (gameMode = GAME_MODES.TWO_PLAYERS) => ({
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
  gameMode,
});

const gameReducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME_MODE":
      return { ...state, gameMode: action.gameMode };
    case "UPDATE_PLAYER_NAME":
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          name: action.name,
        },
      };
    case "PLAY_HUMAN_MOVE": {
      if (
        !Number.isInteger(action.index) ||
        action.index < 0 ||
        action.index >= state.board.length ||
        state.board[action.index] !== "" ||
        state.roundWinner !== "" ||
        computeRoundResult(state.board, state.player1.choice) ||
        (state.gameMode === GAME_MODES.VS_COMPUTER &&
          state.turn === state.player2.choice)
      ) {
        return state;
      }
      const board = [...state.board];
      board[action.index] = state.turn;
      return { ...state, board, turn: state.turn === "X" ? "O" : "X" };
    }
    case "PLAY_COMPUTER_MOVE": {
      if (
        state.gameMode !== GAME_MODES.VS_COMPUTER ||
        state.turn !== state.player2.choice ||
        state.roundWinner !== "" ||
        !Number.isInteger(action.index) ||
        action.index < 0 ||
        action.index >= state.board.length ||
        state.board[action.index] !== "" ||
        computeRoundResult(state.board, state.player1.choice)
      ) {
        return state;
      }
      const board = [...state.board];
      board[action.index] = state.turn;
      return { ...state, board, turn: state.turn === "X" ? "O" : "X" };
    }
    case "RESET_ROUND":
      return {
        ...state,
        board: Array(9).fill(""),
        turn: "X",
        roundWinner: "",
        player1: { ...state.player1, choice: toggleChoice(state.player1.choice) },
        player2: { ...state.player2, choice: toggleChoice(state.player2.choice) },
      };
    case "RESTART_GAME":
      return action.game;
    case "ROUND_ENDED": {
      if (state.roundWinner) return state;
      const result = action.result;
      return {
        ...state,
        roundWinner: result,
        ...(result !== "draw" && {
          [result]: { ...state[result], score: state[result].score + 1 },
        }),
      };
    }
    default:
      return state;
  }
};

export const GameContextProvider = (props) => {
  const { winnerSfx, completeSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const [game, dispatch] = useReducer(
    gameReducer,
    undefined,
    () => createInitialGameState(),
  );

  // Manual Feature Player input name

  const updatePlayerName = (player, name) => {
    dispatch({ type: "UPDATE_PLAYER_NAME", player, name });
  };

  const updateBoard = (index) => {
    dispatch({ type: "PLAY_HUMAN_MOVE", index });
  };

  const resetBoard = useCallback(() => {
    dispatch({ type: "RESET_ROUND" });
  }, []);

  const restartGame = useCallback(() => {
    dispatch({
      type: "RESTART_GAME",
      game: createInitialGameState(game.gameMode),
    });
  }, [game.gameMode]);

  const getRoundResults = (board) =>
    computeRoundResult(board, game.player1.choice);

  const setGameMode = (gameMode) => {
    dispatch({ type: "SET_GAME_MODE", gameMode });
  };

  useEffect(() => {
    if (game.roundWinner) return;

    const result = computeRoundResult(game.board, game.player1.choice);
    if (!result) return;

    if (result === "draw") completeSfx();
    else winnerSfx();
    dispatch({ type: "ROUND_ENDED", result });
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
    restartGame,
    winnerSfx,
    completeSfx,
  ]);

  useEffect(() => {
    if (
      game.gameMode !== GAME_MODES.VS_COMPUTER ||
      game.turn !== game.player2.choice ||
      game.roundWinner
    ) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      const index = getComputerMove(game.board, Math.random());
      if (index === null) return;
      dispatch({ type: "PLAY_COMPUTER_MOVE", index });
    }, 500);

    // Clear stale timers when the turn changes or the provider unmounts.
    return () => clearTimeout(timeoutId);
  }, [
    game.board,
    game.gameMode,
    game.player2.choice,
    game.roundWinner,
    game.turn,
  ]);

  return (
    <GameContext.Provider
      value={{
        updateBoard,
        resetBoard,
        getRoundResults,
        game,
        setGameMode,
        restartGame,
        updatePlayerName,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
