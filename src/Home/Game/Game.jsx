import React, { useContext } from "react";
import { Container } from "../Home.styled";
import { GameBoardStyle, PlayersRow } from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";
import Player from "../../components/Player/Player";

const Game = () => {
  const { game } = useContext(GameContext);
  const { board } = game;
  return (
    <Container>
      <PlayersRow>
        <Player player={game.player1} isPlayerActive={game.player1.choice === game.turn}/>
        <Player player={game.player2} isPlayerActive={game.player2.choice === game.turn} />
      </PlayersRow>
      <GameBoardStyle>
        {board.map((item, index) => {
          return <GameCell key={index} cellItem={item} index={index} />;
        })}
      </GameBoardStyle>
    </Container>
  );
};

export default Game;
