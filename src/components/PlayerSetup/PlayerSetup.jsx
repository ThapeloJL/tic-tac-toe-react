import React, { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import Button from "../Button/Button";
import { PlayerSetupForm, PlayerNameField, PlayerNameInput } from "./PlayerSetup.styled";

const PlayerSetup = ({ onStart, onMouseEnter }) => {
  const { updatePlayerName, game } = useContext(GameContext);
  const [player1Name, setPlayer1Name] = useState(game.player1.name);
  const [player2Name, setPlayer2Name] = useState(game.player2.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePlayerName("player1", player1Name.trim() || "Player1");
    updatePlayerName("player2", player2Name.trim() || "Player2");
    onStart();
  };

  return (
    <PlayerSetupForm onSubmit={handleSubmit}>
      <PlayerNameField>
        <label htmlFor="player1-name">Player 1 name</label>
        <PlayerNameInput
          id="player1-name"
          name="player1Name"
          type="text"
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
        />
      </PlayerNameField>
      <PlayerNameField>
        <label htmlFor="player2-name">Player 2 name</label>
        <PlayerNameInput
          id="player2-name"
          name="player2Name"
          type="text"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
      </PlayerNameField>
      <Button type="submit" onMouseEnter={onMouseEnter}>
        Play Now
      </Button>
    </PlayerSetupForm>
  );
};

export default PlayerSetup;
