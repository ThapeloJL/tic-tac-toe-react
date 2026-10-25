import styled from "styled-components";

export const GameBoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.5rem, 2vw, 1rem);
  width: min(100%, 32rem);
  margin: 0 auto;
`;

export const PlayersRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: clamp(1.5rem, 10vw, 8.75rem);
  width: 100%;
  margin: 0 0 1.5rem;

  ${(props) => props.theme.media.tablet} {
    gap: clamp(2rem, 8vw, 5rem);
  }

  ${(props) => props.theme.media.mobile} {
    gap: clamp(1rem, 8vw, 2.5rem);
    margin-bottom: 1rem;
  }
`;
