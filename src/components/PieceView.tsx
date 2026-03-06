import type { Cell, Direction, Piece } from '../logic/types';

interface PieceViewProps {
  piece: Piece;
  colorClass: string;
  isFailed: boolean;
  onTap: (pieceId: string) => void;
}

const directionSymbol: Record<Direction, string> = {
  up: '↑',
  down: '↓',
  left: '←',
  right: '→'
};

const keyOf = ([x, y]: Cell): string => `${x},${y}`;

const hasNeighbor = (cells: Set<string>, x: number, y: number): boolean => cells.has(`${x},${y}`);

export default function PieceView({ piece, colorClass, isFailed, onTap }: PieceViewProps): JSX.Element {
  const occupied = new Set(piece.cells.map((cell) => keyOf(cell)));

  return (
    <>
      {piece.cells.map(([x, y]) => {
        const topOpen = !hasNeighbor(occupied, x, y - 1);
        const rightOpen = !hasNeighbor(occupied, x + 1, y);
        const bottomOpen = !hasNeighbor(occupied, x, y + 1);
        const leftOpen = !hasNeighbor(occupied, x - 1, y);
        const isHead = piece.head[0] === x && piece.head[1] === y;

        return (
          <button
            key={`${piece.id}-${x}-${y}`}
            type="button"
            className={[
              'piece-cell',
              colorClass,
              isHead ? 'piece-head' : '',
              isFailed ? 'piece-failed' : ''
            ]
              .filter(Boolean)
              .join(' ')}
            style={{
              gridColumn: x,
              gridRow: y,
              borderTopLeftRadius: topOpen && leftOpen ? '14px' : '6px',
              borderTopRightRadius: topOpen && rightOpen ? '14px' : '6px',
              borderBottomRightRadius: bottomOpen && rightOpen ? '14px' : '6px',
              borderBottomLeftRadius: bottomOpen && leftOpen ? '14px' : '6px'
            }}
            onClick={() => onTap(piece.id)}
            aria-label={`Piece ${piece.id} at ${x}, ${y}`}
          >
            {isHead ? <span className="head-arrow">{directionSymbol[piece.direction]}</span> : null}
          </button>
        );
      })}
    </>
  );
}
