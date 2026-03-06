import { useEffect, useMemo, useState } from 'react';
import GameBoard from './components/GameBoard';
import HUD from './components/HUD';
import ResultModal from './components/ResultModal';
import { stages } from './data/stages';
import { canPieceEscape, hasAnyEscapablePiece } from './logic/escape';
import { cloneStage } from './logic/stage';
import type { GameStatus, Stage } from './logic/types';

const LEVEL_STORAGE_KEY = 'arrow-game-level';

const computeLives = (baseLives: number, level: number): number => {
  const reduction = Math.floor((level - 1) / stages.length);
  return Math.max(1, baseLives - reduction);
};

function initStageForLevel(level: number): Stage {
  const index = (level - 1) % stages.length;
  return cloneStage(stages[index]);
}

export default function App(): JSX.Element {
  const [level, setLevel] = useState<number>(() => {
    const stored = localStorage.getItem(LEVEL_STORAGE_KEY);
    const parsed = stored ? parseInt(stored, 10) : NaN;
    return !Number.isNaN(parsed) && parsed >= 1 ? parsed : 1;
  });

  const stageIndex = useMemo(() => (level - 1) % stages.length, [level]);
  const [stage, setStage] = useState<Stage>(() => initStageForLevel(level));
  const [lives, setLives] = useState<number>(() => computeLives(stages[stageIndex].lives, level));
  const [status, setStatus] = useState<GameStatus>('playing');
  const [failedPieceId, setFailedPieceId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(LEVEL_STORAGE_KEY, level.toString());
  }, [level]);

  useEffect(() => {
    if (!failedPieceId) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setFailedPieceId(null);
    }, 260);

    return () => window.clearTimeout(timeoutId);
  }, [failedPieceId]);

  const stageLabel = useMemo(() => `${stage.id} / ${stages.length}`, [stage.id]);

  const loadLevel = (nextLevel: number): void => {
    const fresh = initStageForLevel(nextLevel);
    const freshLives = computeLives(stages[(nextLevel - 1) % stages.length].lives, nextLevel);
    setLevel(nextLevel);
    setStage(fresh);
    setLives(freshLives);
    setStatus('playing');
    setFailedPieceId(null);
  };

  const handleRestart = (): void => {
    const fresh = initStageForLevel(level);
    const freshLives = computeLives(stages[stageIndex].lives, level);
    setStage(fresh);
    setLives(freshLives);
    setStatus('playing');
    setFailedPieceId(null);
  };

  const handleNextStage = (): void => {
    loadLevel(level + 1);
  };

  const handleResetLevel = (): void => {
    loadLevel(1);
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
        return;
      }

      if (!hasAnyEscapablePiece(remaining, stage.gridWidth, stage.gridHeight)) {
        setStatus('deadlock');
        return;
      }
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
      <h1>Arrow Puzzle</h1>
      <HUD stageLabel={stageLabel} level={level} lives={lives} onRestart={handleRestart} onResetLevel={handleResetLevel} />
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
      <ResultModal status={status} level={level} onRetry={handleRestart} onNext={handleNextStage} />
    </main>
  );
}
