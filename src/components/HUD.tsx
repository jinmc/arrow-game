interface HUDProps {
  stageLabel: string;
  lives: number;
  onRestart: () => void;
}

export default function HUD({ stageLabel, lives, onRestart }: HUDProps): JSX.Element {
  return (
    <header className="hud">
      <div className="hud-item">
        <span className="hud-label">Stage</span>
        <strong>{stageLabel}</strong>
      </div>
      <div className="hud-item">
        <span className="hud-label">Lives</span>
        <strong>{'❤'.repeat(lives) || '0'}</strong>
      </div>
      <button type="button" className="ghost-btn" onClick={onRestart}>
        Restart
      </button>
    </header>
  );
}
