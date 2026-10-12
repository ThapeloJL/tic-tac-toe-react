import React from "react";
import ThemeContextProvider from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import ModalContextProvider from "./ModalContext";
import { SfxContextProvider } from "./SfxContext";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <SfxContextProvider>
        <ModalContextProvider>
          <GameContextProvider>{children}</GameContextProvider>
        </ModalContextProvider>
      </SfxContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
