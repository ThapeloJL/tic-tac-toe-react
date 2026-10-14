import styled from "styled-components";
import { MdPlayArrow, MdPause, MdSkipNext } from "react-icons/md";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin-top: 4rem;
  width: 100%;
`;

export const PlayIcon = styled(MdPlayArrow)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
`;

export const PauseIcon = styled(MdPause)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
`;

export const NextIcon = styled(MdSkipNext)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
`;
