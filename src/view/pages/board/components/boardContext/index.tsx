import { createContext } from "react";

interface BoardContextValue {}

export const BoardContext = createContext({} as BoardContextValue);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  return <BoardContext.Provider value={{}}>{children}</BoardContext.Provider>;
}
