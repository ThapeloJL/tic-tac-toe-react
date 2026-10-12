import { Children, createContext, useCallback, useMemo, useState } from "react";
import { playSound } from "react-sounds";

export const SfxContext = createContext({
  hoverSfx: () => {},
  clickSfx: () => {},
  muted: false,
  toggleMute: () => {},
});

export const SfxContextProvider = ({children}) =>{
    const [muted , setMuted] = useState(false);

    const clickSfx = useCallback(() =>{
        if(!muted) playSound("ui/button_1")
    } ,[muted])

    const hoverSfx = useCallback(() =>{
        if(!muted) playSound("ui/button_1")
    }, [muted])

    const toggleMute = useCallback (() =>setMuted((m) => !m), [])

    const value = useMemo(
        () => ({clickSfx , hoverSfx, muted , toggleMute}),
        [clickSfx , hoverSfx , muted , toggleMute]
    )

    return <SfxContext.Provider value={value}>{children}</SfxContext.Provider>
}