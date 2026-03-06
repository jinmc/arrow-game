import PieceView from './PieceView';
import type { Piece } from '../logic/types';

interface GameBoardProps {
  width: number;
  height: number;
  pieces: Piece[];
  failedPieceId: string | null;
  onPieceTap: (pieceId: string) => void;
}

const pieceColors = ['piece-c1', 'piece-c2', 'piece-c3', 'piece-c4', 'piece-c5', 'piece-c6'];

export default function GameBoard({
  width,
  height,
  pieces,
  failedPieceId,
  onPieceTap
}: GameBoardProps): JSX.Element {
  const cellCount = width * height;

  return (
    <section className="board-wrap" aria-label="Puzzle board">
      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${height}, minmax(0, 1fr))`
        }}
      >
        {Array.from({ length: cellCount }, (_, index) => {
          const x = (index % width) + 1;
          const y = Math.floor(index / width) + 1;
          return <div key={`bg-${x}-${y}`} className="board-cell" style={{ gridColumn: x, gridRow: y }} />;
        })}
        {pieces.map((piece, index) => (
          <PieceView
            key={piece.id}
            piece={piece}
            colorClass={pieceColors[index % pieceColors.length]}
            isFailed={failedPieceId === piece.id}
            onTap={onPieceTap}
          />
        ))}
      </div>
    </section>
  );
}
