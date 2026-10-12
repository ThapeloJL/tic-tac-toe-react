import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: ${(props) => props?.columnBased ? "column" : "row"};
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  text-align: center;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  text-align: center;
`;

