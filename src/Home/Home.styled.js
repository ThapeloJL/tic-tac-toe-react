import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;
`;

export const DifficultyField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: min(100%, 320px);
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.text};
  font-family: "Poppins", sans-serif;
  text-align: left;
`;

export const DifficultySelect = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  font: inherit;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.purple};
    outline-offset: 2px;
  }
`;
