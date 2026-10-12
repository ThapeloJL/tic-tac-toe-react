import React, { useContext, useEffect, useRef, useState } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import playList from "../../utils/MusicUtilis/playList";
import { randomizeindex } from "../../utils/MusicUtilis";
import { PlayIcon } from "./MusicPlayer.styled";
import { PauseIcon } from "./MusicPlayer.styled";
import { ShuffleIcon } from "./MusicPlayer.styled";
import {SfxContext} from "../../contexts/SfxContext"
import { useSound } from "react-sounds";

const MusicPlayer = () => {
  // const{ hoverSfx , clickSfx} = useContext(SfxContext)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeindex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);
    const { clickSfx } = useContext(SfxContext);



  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    if (isPlaying) {
      const playPromise = player.play();
      if (playPromise) {
        playPromise.catch(() => {});
        setPlayPromise(playPromise);
      }
    } else {
      if (playPromise) {
        playPromise.then(() => player.pause()).catch(() => {});
      } else {
        player.pause();
      }
    }
  }, [isPlaying]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
    });

    setCurrentSong(randomizeindex(playList));
    setIsPlaying(true);
  };
  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon onClick={() => setIsPlaying(false)}>Pause</PauseIcon>
      ) : (
        <PlayIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(true);
          }}
        >
          Play
        </PlayIcon>
      )}

      <ShuffleIcon onClick={() => shuffleHandler()}>shuffle</ShuffleIcon>
      <audio
        ref={playerRef}
        src={playList[currentSong]}
        onEnded={shuffleHandler}
      ></audio>

      <p>{playList[currentSong]}</p>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
