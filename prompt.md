# Build Prompt

Please read `game_spec.md` carefully and implement the MVP exactly as described.

## Tech Stack
- React
- TypeScript
- Vite
- simple CSS or Tailwind
- no backend
- local stage data only

## Goal
Build a playable mobile-first web puzzle game MVP.

## Core Rules
1. This is an Arrow Puzzle style game.
2. Pieces are NOT limited to single-cell arrows.
3. A piece can occupy multiple cells.
4. A piece can be straight or bent.
5. Each piece has:
   - `cells`: list of occupied grid cells
   - `head`: one cell
   - `direction`: final exit direction
6. When the user taps a piece, it tries to escape.
7. Escape success depends ONLY on whether the path from the head toward the final direction is clear.
8. If that exit line is blocked by another piece, the move fails and the player loses 1 life.
9. If not blocked, the piece is removed from the board.
10. When all pieces are removed, the stage is cleared.
11. When life reaches 0, show game over.

## Please Implement
- stage rendering
- piece rendering for multi-cell connected pieces
- head rendering so direction is visually clear
- tap-to-attempt-escape behavior
- blocked/unblocked logic
- life system
- stage clear / next stage
- restart button
- at least 5 sample stages including both straight and bent pieces

## Implementation Details
- represent the board as a grid
- render each piece from its `cells` array
- keep logic modular
- use TypeScript types
- avoid complicated animation for now
- make it responsive for mobile portrait screens
- use simple colors and a minimal clean layout

## Output Requirements
Please generate:
1. project structure
2. all required source files
3. TypeScript types for stages and pieces
4. sample stage data
5. core game logic
6. basic styling

## Constraints
- Make the code runnable immediately with:
  - `npm install`
  - `npm run dev`
- explain how to run the project
- keep comments concise
- do not add backend or database
- do not add authentication
- do not add libraries unless really necessary
- do not simplify the piece model into only one-cell arrows
- multi-cell and bent pieces are mandatory