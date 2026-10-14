import { useCallback, useEffect, useRef } from "react";
import clickSound from "../assets/audio/sounds/click.mp3";
import completeSound from "../assets/audio/sounds/complete.mp3";
import hoverSound from "../assets/audio/sounds/hover.mp3";
import winnerSound from "../assets/audio/sounds/winner.mp3";

const sounds = {
  click: clickSound,
  complete: completeSound,
  hover: hoverSound,
  winner: winnerSound,
};

const useSound = (soundName, { volume = 0.05, timeout = 0 } = {}) => {
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(sounds[soundName]);
    audio.volume = volume;
    audio.load();
    audioRef.current = audio;

    return () => {
      audio.pause();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [soundName, volume]);

  return useCallback(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    audio.currentTime = 0;
    const playPromise = audio.play();
    if(playPromise !== undefined){
      playPromise.catch((error)=>{
        if(error.name !== "NotAllowedError" && error.name !== "AbortError"){
          console.error("Sound playback failed :",error)
        }
      })
    }

    if (timeout > 0) {
      timeoutRef.current = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        timeoutRef.current = null;
      }, timeout);
    }
  }, [timeout]);
};

export default useSound;
