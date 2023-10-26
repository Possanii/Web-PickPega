import { useContext } from "react";
import { BoardContext } from ".";

export function useBoard() {
  return useContext(BoardContext);
}
