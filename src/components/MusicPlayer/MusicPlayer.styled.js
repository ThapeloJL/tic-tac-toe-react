import styled from "styled-components";
import { MdPlayArrow } from "react-icons/md";
import { MdOutlinePause } from "react-icons/md";
import { IoMdShuffle } from "react-icons/io";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin-bottom: 2rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 10px;
`;

export const PlayIcon = styled(MdPlayArrow)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2.5rem;
  cursor: pointer;
`;

export const PauseIcon = styled(MdOutlinePause)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
`;

export const ShuffleIcon = styled(IoMdShuffle)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
`;


