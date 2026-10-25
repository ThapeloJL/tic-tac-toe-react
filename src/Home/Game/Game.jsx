import React, { useContext } from "react";
import { Container } from "../Home.styled";
import { GameBoardStyle, PlayersRow } from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";
import Player from "../../components/Player/Player";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { GAME_MODES } from "../../contexts/GameContext";

const Game = () => {
  const { game } = useContext(GameContext);
  const { board } = game;
  console.log(board)
  return (
    <Container columnBased>
      <PlayersRow>
        <Player player={game.player1} isplayeractive={game.player1.choice === game.turn}/>
        <Player
          player={{
            ...game.player2,
            name:
              game.gameMode === GAME_MODES.VS_COMPUTER
                ? "Computer"
                : game.player2.name,
          }}
          isplayeractive={game.player2.choice === game.turn}
        />
      </PlayersRow>
      <GameBoardStyle>
        {board.map((item, index) => {
          return <GameCell key={index} cellItem={item} index={index} />;
        })}
      </GameBoardStyle>
      <MusicPlayer />
    </Container>
  );
};

export default Game;
