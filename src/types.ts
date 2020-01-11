export type Color = "yellow" | "red" | null;

export interface Cell {
  x: number;
  y: number;
  color: Color;
}
