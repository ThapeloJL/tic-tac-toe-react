import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 5rem);
  min-height: calc(100dvh - 5rem);
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  text-align: center;

  ${(props) => props.theme.media.tablet} {
    padding: 1.5rem;
  }

  ${(props) => props.theme.media.mobile} {
    min-height: calc(100vh - 4rem);
    min-height: calc(100dvh - 4rem);
    padding: 1.25rem 1rem;
  }
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

  ${(props) => props.theme.media.mobile} {
    margin-top: 0.75rem;
  }
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
