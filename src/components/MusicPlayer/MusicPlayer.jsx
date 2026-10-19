import React, { useContext, useEffect, useRef, useState } from "react";
import {
  MusicPlayerWrapper,
  NextIcon,
  PauseIcon,
  PlayIcon,
} from "./MusicPlayer.styled"; // eslint-disable-next-line
import playList from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils/Index";
import { SfxContext } from "../../contexts/SfxContext";
import { Text } from "../../styles/General.styled";

const MusicPlayer = () => {
  const { hoverSfx, clickedSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playError, setPlayError] = useState("");

  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player && player?.volume) {
      player.volume = 0.01
      return;
    }

    if (!isPlaying) {
      player.pause();
      return;
    }

    setPlayError("");
    const playRequest = player.play();
    playRequest?.catch((error) => {
      if (error.name === "AbortError") {
        return;
      }

      setPlayError("Unable to play this track. Please try again.");
      setIsPlaying(false);
      console.error("Music playback failed:", error);
    });
  }, [isPlaying, currentSong]);

  const shuffleHandler = () => {
    const nextSong = randomizeIndex(playList);
    setCurrentSong((previousSong) => {
      if (playList.length > 1 && nextSong === previousSong) {
        return (previousSong + 1) % playList.length;
      }
      return nextSong;
    });
    setIsPlaying(true);
  };

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => {
            clickedSfx();
            setIsPlaying(false);
            
          }}
          onMouseEnter={() => hoverSfx()}
        />
      ) : (
        <PlayIcon
          onClick={() => {
            clickedSfx();
            setIsPlaying(true);
            
          }}
          onMouseEnter={() => hoverSfx()}
        />
      )}
      <NextIcon
        onClick={() => {
          clickedSfx();
          shuffleHandler();
        }}
        onMouseEnter={() => hoverSfx()}
      />

      <audio
        ref={playerRef}
        src={playList[currentSong]}
        onEnded={shuffleHandler}
      />
      <Text>{playList[currentSong].split("/")[6]}</Text>
      {playError && <p role="alert">{playError}</p>}
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
