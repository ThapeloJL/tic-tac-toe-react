import styled from "styled-components";
import { MdPlayArrow, MdPause, MdSkipNext } from "react-icons/md";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3rem;
  margin-top: 2rem;
  width: 100%;
  gap: 0.75rem;

  ${(props) => props.theme.media.tablet} {
    margin-top: 1.5rem;
  }

  ${(props) => props.theme.media.mobile} {
    margin-top: 1rem;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
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
