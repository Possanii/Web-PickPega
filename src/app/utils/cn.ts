import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Classe criada para evitar conflitos de estilização nos componentes tailwind

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
