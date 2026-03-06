import { cellKey, createOccupancyMap } from './stage';
import type { Direction, EscapeResult, Piece } from './types';

const directionStep: Record<Direction, [number, number]> = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0]
};

export const canPieceEscape = (
  piece: Piece,
  pieces: Piece[],
  gridWidth: number,
  gridHeight: number
): EscapeResult => {
  const occupancy = createOccupancyMap(pieces);
  const [dx, dy] = directionStep[piece.direction];
  let [x, y] = piece.head;

  x += dx;
  y += dy;

  while (x >= 1 && x <= gridWidth && y >= 1 && y <= gridHeight) {
    const occupant = occupancy.get(cellKey([x, y]));

    if (occupant && occupant !== piece.id) {
      return { canEscape: false, blockerId: occupant };
    }

    x += dx;
    y += dy;
  }

  return { canEscape: true };
};
