import { createContext, ReactNode, useContext, useState } from "react";

const Play = createContext(false);
const SetPlay = createContext((_play: boolean) => {});

function PlayContext({ children }: { children: ReactNode }) {
  const [isPlay, setPlay] = useState(false);
  return (
    <Play.Provider value={isPlay}>
      <SetPlay.Provider value={setPlay}>{children}</SetPlay.Provider>
    </Play.Provider>
  );
}

export function usePlay() {
  return useContext(Play);
}

export function useSetPlay() {
  return useContext(SetPlay);
}

export default PlayContext;
