import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getImageUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href
}