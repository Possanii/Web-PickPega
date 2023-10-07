import { useContext } from "react";
import { MenuContext } from ".";

export function useMenu() {
  return useContext(MenuContext);
}
