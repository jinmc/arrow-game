import type { Piece, Stage } from './types';

export const cellKey = ([x, y]: [number, number]): string => `${x},${y}`;

export const createOccupancyMap = (pieces: Piece[]): Map<string, string> => {
  const occupancy = new Map<string, string>();

  for (const piece of pieces) {
    for (const cell of piece.cells) {
      occupancy.set(cellKey(cell), piece.id);
    }
  }

  return occupancy;
};

export const cloneStage = (stage: Stage): Stage => ({
  ...stage,
  pieces: stage.pieces.map((piece) => ({
    ...piece,
    cells: piece.cells.map(([x, y]) => [x, y]),
    head: [piece.head[0], piece.head[1]]
  }))
});
