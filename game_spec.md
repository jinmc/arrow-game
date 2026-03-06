# Arrow Puzzle Clone - MVP Spec

## 1. Overview

**Project Name**  
Arrow Puzzle Clone (MVP)

**Genre**  
Casual Puzzle

**Platform**  
Mobile-first web game (responsive), later portable to app

**Goal**  
Clear all arrow pieces from the board by tapping them in the correct order.

---

## 2. Core Concept

The board contains multiple arrow-shaped pieces.

Each piece:
- occupies one or more cells
- may be straight or bent
- has a final exit direction
- can be tapped by the player

When a piece is tapped:
- it attempts to move out of the board
- it can escape if its final exit direction is not blocked
- if blocked, the player loses 1 life
- if it escapes, that piece is removed from the board

The stage is cleared when all pieces are removed.  
The game ends when lives reach 0.

---

## 3. Important Rule Clarification

This game does **not** use only single-cell arrows.

Arrow pieces can be:
- straight
- long
- bent / elbow-shaped
- composed of multiple connected cells

### Example concepts

- A straight arrow of length 3 pointing right
- An L-shaped arrow whose tail starts lower-left and whose head exits upward
- A bent arrow whose final head direction determines escape

### Escape rule

A piece can escape if:
- the path from its **head** toward its **final direction** is open to the outside of the board
- there is no blocking piece on that exit line

A piece does **not** need its whole body direction to be straight.  
Only the **final head direction** matters for escape.

---

## 4. Definitions

### 4.1 Piece
A connected shape made of one or more cells.

Each piece has:
- `id`
- occupied cells
- head cell
- final direction
- shape type

### 4.2 Head
The leading end of the piece.

The head determines:
- exit direction
- whether the piece can escape

### 4.3 Final Direction
The direction in which the head exits the board.

Allowed values:
- `up`
- `down`
- `left`
- `right`

### 4.4 Blocked
A piece is blocked if:
- another piece exists in the exit path from the head
- therefore it cannot leave the board

---

## 5. Gameplay Rules

### 5.1 Tap Behavior
When the player taps a piece:
1. Identify that piece's head and final direction
2. Check whether the exit path is clear
3. If clear, remove the piece from the board
4. If blocked, decrease life by 1

### 5.2 Clear Condition
The stage is cleared when:
- all pieces are removed

### 5.3 Failure Condition
Game over occurs when:
- life reaches 0

---

## 6. Piece Format

Each piece is represented by:
- a list of occupied grid cells
- a head cell
- a final direction

This is enough for the MVP.

### Example JSON-like format

    {
      "id": "piece_1",
      "cells": [[1,1], [2,1], [3,1]],
      "head": [3,1],
      "direction": "right"
    }

Example of a bent piece:

    {
      "id": "piece_2",
      "cells": [[1,3], [2,3], [2,2]],
      "head": [2,2],
      "direction": "up"
    }

Interpretation:
- the piece occupies 3 connected cells
- it bends once
- the head is at `[2,2]`
- it escapes upward if the path above the head is open

---

## 7. Board Rules

### 7.1 Grid
The board is a 2D grid.

Initial MVP sizes:
- 5x5
- 6x6
- 7x7

### 7.2 Occupancy
Each cell can contain:
- empty
- one piece cell

No overlapping pieces allowed.

### 7.3 Connectivity
All cells belonging to a piece must be orthogonally connected.

---

## 8. Life System

Initial life:
- 3

On failed escape attempt:
- life -= 1

When life becomes 0:
- show Game Over screen

---

## 9. UI Requirements

### 9.1 Main Game Screen
Must include:
- stage number
- remaining lives
- puzzle board
- restart button

### 9.2 Result UI
On stage clear:
- show clear message
- next stage button
- retry button

On game over:
- show game over message
- retry button

---

## 10. Visual Requirements

For MVP:
- simple clean background
- grid visible or lightly indicated
- each piece shown with connected blocks + arrow head
- head direction clearly visible
- tapped piece should have small feedback animation if possible

No need for polished art in MVP.

---

## 11. Functional Requirements

### Required for MVP
- stage loading from local data
- render grid
- render multi-cell pieces
- support straight and bent pieces
- determine head and final direction
- detect blocked/unblocked state
- remove escaped piece
- reduce life on failure
- clear/game over logic
- restart stage
- next stage

### Not required for MVP
- sound
- ads
- shop
- skins
- online leaderboard
- save sync

---

## 12. Escape Logic

For a tapped piece:

1. Get the head cell `(x, y)`
2. Get the final direction
3. Cast a straight line from the head toward the board boundary
4. If any occupied cell of another piece exists on that line:
   - blocked
   - fail
   - lose 1 life
5. Otherwise:
   - success
   - remove the piece

### Important
Only the exit line from the **head** matters.

The rest of the body shape does not block its own escape.  
The body shape is only for rendering and structure.

---

## 13. Example

### Example A: success

Piece:
- cells = `[[1,1], [2,1], [3,1]]`
- head = `[3,1]`
- direction = `right`

If no piece exists at:
- `[4,1]`
- `[5,1]`
- and so on until outside board

Then the piece escapes.

### Example B: blocked

Piece:
- cells = `[[1,3], [2,3], [2,2]]`
- head = `[2,2]`
- direction = `up`

If another piece occupies:
- `[2,1]`

Then escape fails and life decreases.

---

## 14. Stage Data Structure

Recommended stage structure:

    {
      "id": 1,
      "name": "Stage 1",
      "gridWidth": 5,
      "gridHeight": 5,
      "lives": 3,
      "pieces": [
        {
          "id": "a",
          "cells": [[1,1], [2,1], [3,1]],
          "head": [3,1],
          "direction": "right"
        },
        {
          "id": "b",
          "cells": [[3,3], [3,2], [2,2]],
          "head": [2,2],
          "direction": "left"
        }
      ]
    }

---

## 15. Recommended Tech Stack

Preferred:
- TypeScript
- React
- Vite
- CSS or Tailwind
- local JSON stage data

Reason:
- fast MVP development
- easy testing in browser
- easy deployment

Optional alternative:
- Phaser

But for this puzzle MVP, React + simple grid rendering is enough.

---

## 16. Suggested Folder Structure

    src/
      components/
        GameBoard.tsx
        PieceView.tsx
        HUD.tsx
        ResultModal.tsx
      data/
        stages.ts
      logic/
        escape.ts
        stage.ts
        types.ts
      App.tsx
      main.tsx

---

## 17. Development Priority

1. Define types for board and pieces
2. Implement stage data
3. Render grid and pieces
4. Implement tap handling
5. Implement escape-path check
6. Implement piece removal
7. Implement life system
8. Implement stage clear / game over
9. Add simple polish

---

## 18. MVP Success Criteria

The MVP is successful if:
- at least 10 playable stages exist
- straight and bent pieces both work
- tapping pieces clearly succeeds or fails
- lives decrease correctly
- stages can be completed and restarted without bugs

---

## 19. Notes for AI Coding Assistant

Important implementation assumptions:
- Piece body shape is visual + structural
- Escape is determined only by the head cell and final direction
- A piece removes instantly on successful escape
- No animation is required for first version
- Use simple, readable code over over-engineering