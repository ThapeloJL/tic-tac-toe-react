import styled from "styled-components";

export const PlayerSetupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  width: min(100%, 320px);
  margin-top: 1.5rem;
`;

export const PlayerNameField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: ${(props) => props.theme.colors.text};
  font-family: "Poppins", sans-serif;
  text-align: left;
`;

export const PlayerNameInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  font-family: inherit;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.purple};
    outline-offset: 2px;
  }
`;
