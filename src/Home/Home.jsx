import React from "react";
import { Container } from "./Home.styled";
import { Title, Subtitle } from "../styles/General.styled";
import Button, {} from "../components/Button/Button"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigation = useNavigate()
  return (
    <Container>
      <Title>Tictactoe</Title>
      <Subtitle>Play with Friends : Score higher</Subtitle>
      <Button onClick={()=>navigation("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
