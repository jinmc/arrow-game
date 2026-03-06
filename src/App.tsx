import { useEffect, useMemo, useState } from 'react';
import GameBoard from './components/GameBoard';
import HUD from './components/HUD';
import ResultModal from './components/ResultModal';
import { stages } from './data/stages';
import { canPieceEscape } from './logic/escape';
import { cloneStage } from './logic/stage';
import type { GameStatus, Stage } from './logic/types';

function initStage(stageIndex: number): Stage {
  return cloneStage(stages[stageIndex]);
}

export default function App(): JSX.Element {
  const [stageIndex, setStageIndex] = useState(0);
  const [stage, setStage] = useState<Stage>(() => initStage(0));
  const [lives, setLives] = useState(() => stages[0].lives);
  const [status, setStatus] = useState<GameStatus>('playing');
  const [failedPieceId, setFailedPieceId] = useState<string | null>(null);

  const stageLabel = useMemo(() => `${stage.id} / ${stages.length}`, [stage.id]);
  const isLastStage = stageIndex === stages.length - 1;

  useEffect(() => {
    if (!failedPieceId) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setFailedPieceId(null);
    }, 260);

    return () => window.clearTimeout(timeoutId);
  }, [failedPieceId]);

  const loadStage = (nextStageIndex: number): void => {
    const fresh = initStage(nextStageIndex);
    setStageIndex(nextStageIndex);
    setStage(fresh);
    setLives(fresh.lives);
    setStatus('playing');
    setFailedPieceId(null);
  };

  const handleRestart = (): void => {
    loadStage(stageIndex);
  };

  const handleNextStage = (): void => {
    const nextIndex = isLastStage ? 0 : stageIndex + 1;
    loadStage(nextIndex);
  };

  const handlePieceTap = (pieceId: string): void => {
    if (status !== 'playing') {
      return;
    }

    const target = stage.pieces.find((piece) => piece.id === pieceId);
    if (!target) {
      return;
    }

    const result = canPieceEscape(target, stage.pieces, stage.gridWidth, stage.gridHeight);

    if (result.canEscape) {
      const remaining = stage.pieces.filter((piece) => piece.id !== pieceId);
      setStage({ ...stage, pieces: remaining });
      setFailedPieceId(null);

      if (remaining.length === 0) {
        setStatus('cleared');
      }
      return;
    }

    setFailedPieceId(pieceId);
    setLives((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        setStatus('gameover');
        return 0;
      }
      return next;
    });
  };

  return (
    <main className="app-shell">
      <h1>Arrow Puzzle MVP</h1>
      <HUD stageLabel={stageLabel} lives={lives} onRestart={handleRestart} />
      <GameBoard
        width={stage.gridWidth}
        height={stage.gridHeight}
        pieces={stage.pieces}
        failedPieceId={failedPieceId}
        onPieceTap={handlePieceTap}
      />
      <p className="help-text">
        Tap a piece to attempt escape. Success depends only on the clear exit line from the head arrow.
      </p>
      <ResultModal status={status} isLastStage={isLastStage} onRetry={handleRestart} onNext={handleNextStage} />
    </main>
  );
}
