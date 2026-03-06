export type Direction = 'up' | 'down' | 'left' | 'right';

export type Cell = [x: number, y: number];

export interface Piece {
  id: string;
  cells: Cell[];
  head: Cell;
  direction: Direction;
}

export interface Stage {
  id: number;
  name: string;
  gridWidth: number;
  gridHeight: number;
  lives: number;
  pieces: Piece[];
}

export type GameStatus = 'playing' | 'cleared' | 'gameover';

export interface EscapeResult {
  canEscape: boolean;
  blockerId?: string;
}
