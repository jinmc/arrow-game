interface HUDProps {
  stageLabel: string;
  level: number;
  lives: number;
  onRestart: () => void;
  onResetLevel: () => void;
}

export default function HUD({ stageLabel, level, lives, onRestart, onResetLevel }: HUDProps): JSX.Element {
  return (
    <header className="hud">
      <div className="hud-item">
        <span className="hud-label">Level</span>
        <strong>{level}</strong>
      </div>
      <div className="hud-item">
        <span className="hud-label">Stage</span>
        <strong>{stageLabel}</strong>
      </div>
      <div className="hud-item">
        <span className="hud-label">Lives</span>
        <strong>{'❤'.repeat(lives) || '0'}</strong>
      </div>
      <div className="hud-actions">
        <button type="button" className="ghost-btn" onClick={onRestart}>
          Restart
        </button>
        <button type="button" className="ghost-btn" onClick={onResetLevel} title="Reset to Level 1">
          Reset
        </button>
      </div>
    </header>
  );
}
