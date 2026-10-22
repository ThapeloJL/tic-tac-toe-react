import React, { useContext, useState } from "react";
import { Container, DifficultyField, DifficultySelect } from "./Home.styled";
import { Title, Subtitle } from "../styles/General.styled";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../contexts/SfxContext"; 
import PlayerSetup from "../components/PlayerSetup/PlayerSetup";  // eslint-disable-next-line 

const Home = () => {
  const navigation = useNavigate();
  const [difficulty, setDifficulty] = useState("easy");

  const { hoverSfx, clickedSfx } = useContext(SfxContext);

  return (
    <Container columnBased>
      <Title>Tictactoe</Title>
      <Subtitle>Play with Friends : Score higher</Subtitle>
      <DifficultyField>
        <label htmlFor="game-difficulty">Game difficulty</label>
        <DifficultySelect
          id="game-difficulty"
          name="gameDifficulty"
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </DifficultySelect>
      </DifficultyField>
      <PlayerSetup
        onStart={() => {
          clickedSfx();
          navigation("/game-on");
        }}
        onMouseEnter={hoverSfx}
      />
    </Container>
  );
};

export default Home;
