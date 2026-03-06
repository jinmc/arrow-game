import type { GameStatus } from '../logic/types';

interface ResultModalProps {
  status: GameStatus;
  level: number;
  onRetry: () => void;
  onNext: () => void;
}

export default function ResultModal({ status, level, onRetry, onNext }: ResultModalProps): JSX.Element | null {
  if (status === 'playing') {
    return null;
  }

  if (status === 'gameover') {
    return (
      <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Game over">
        <div className="modal-card">
          <h2>Game Over</h2>
          <p>Your lives reached zero. You reached level {level}.</p>
          <button type="button" className="solid-btn" onClick={onRetry}>
            Retry Stage
          </button>
        </div>
      </div>
    );
  }

  if (status === 'deadlock') {
    return (
      <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Puzzle locked">
        <div className="modal-card">
          <h2>Puzzle Locked!</h2>
          <p>No arrows can escape from this position. Restart or skip this stage.</p>
          <div className="modal-actions">
            <button type="button" className="ghost-btn" onClick={onRetry}>
              Restart Stage
            </button>
            <button type="button" className="solid-btn" onClick={onNext}>
              Skip Stage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Stage clear">
      <div className="modal-card">
        <h2>Stage Clear!</h2>
        <p>Great job! Advancing to level {level + 1}.</p>
        <div className="modal-actions">
          <button type="button" className="ghost-btn" onClick={onRetry}>
            Retry Stage
          </button>
          <button type="button" className="solid-btn" onClick={onNext}>
            Next Stage
          </button>
        </div>
      </div>
    </div>
  );
}
