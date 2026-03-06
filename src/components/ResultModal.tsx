import type { GameStatus } from '../logic/types';

interface ResultModalProps {
  status: GameStatus;
  isLastStage: boolean;
  onRetry: () => void;
  onNext: () => void;
}

export default function ResultModal({
  status,
  isLastStage,
  onRetry,
  onNext
}: ResultModalProps): JSX.Element | null {
  if (status === 'playing') {
    return null;
  }

  if (status === 'gameover') {
    return (
      <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Game over">
        <div className="modal-card">
          <h2>Game Over</h2>
          <p>Your lives reached zero.</p>
          <button type="button" className="solid-btn" onClick={onRetry}>
            Retry Stage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Stage clear">
      <div className="modal-card">
        <h2>Stage Clear</h2>
        <p>{isLastStage ? 'You cleared every stage in this MVP set.' : 'Ready for the next puzzle?'}</p>
        <div className="modal-actions">
          <button type="button" className="ghost-btn" onClick={onRetry}>
            Retry Stage
          </button>
          <button type="button" className="solid-btn" onClick={onNext}>
            {isLastStage ? 'Play From Stage 1' : 'Next Stage'}
          </button>
        </div>
      </div>
    </div>
  );
}
