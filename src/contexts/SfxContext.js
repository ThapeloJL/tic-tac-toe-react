import React, { createContext } from "react";
import useSound from "../hooks/useSound";



export const SfxContext = createContext({});

const SfxContextProvider = ({ children }) => {

  const options = {
    volume: 0.05,
    timeout: 200,
  }

  const hoverSfx = useSound("hover", options)
  const clickedSfx = useSound("click", options)
  const winnerSfx = useSound("winner", {...options ,timeout: 3000})
  const completeSfx = useSound("complete",{...options ,timeout: 3000})


  return (
    <SfxContext.Provider value={{hoverSfx,clickedSfx, winnerSfx,completeSfx}}>{children}</SfxContext.Provider>
  );
};

// https://pixabay.com/sound-effects/film-special-effects-mouse-click-290204/

export default SfxContextProvider;

// https://cdn.pixabay.com/audio/2025/07/29/audio_e4fa6b8b35.mp3 - music audio
