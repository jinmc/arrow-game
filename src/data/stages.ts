import type { Stage } from '../logic/types';

export const stages: Stage[] = [
  {
    id: 1,
    name: 'Warmup Lane',
    gridWidth: 5,
    gridHeight: 5,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[1, 1], [2, 1], [3, 1]], head: [3, 1], direction: 'right' },
      { id: 'b', cells: [[2, 4], [3, 4], [3, 3]], head: [3, 3], direction: 'up' },
      { id: 'c', cells: [[5, 5], [4, 5]], head: [4, 5], direction: 'left' }
    ]
  },
  {
    id: 2,
    name: 'First Bend',
    gridWidth: 5,
    gridHeight: 5,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[1, 3], [2, 3], [2, 2]], head: [2, 2], direction: 'up' },
      { id: 'b', cells: [[2, 1], [3, 1], [4, 1]], head: [4, 1], direction: 'right' },
      { id: 'c', cells: [[5, 4], [4, 4], [4, 5]], head: [4, 5], direction: 'down' }
    ]
  },
  {
    id: 3,
    name: 'Split Exit',
    gridWidth: 6,
    gridHeight: 6,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[2, 2], [3, 2], [4, 2]], head: [4, 2], direction: 'right' },
      { id: 'b', cells: [[5, 2], [5, 3]], head: [5, 3], direction: 'down' },
      { id: 'c', cells: [[1, 6], [2, 6], [2, 5]], head: [2, 5], direction: 'up' },
      { id: 'd', cells: [[6, 6], [6, 5], [5, 5]], head: [5, 5], direction: 'left' }
    ]
  },
  {
    id: 4,
    name: 'Corner Pressure',
    gridWidth: 6,
    gridHeight: 6,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[4, 4], [4, 3], [5, 3]], head: [5, 3], direction: 'right' },
      { id: 'b', cells: [[6, 5], [6, 4], [6, 3]], head: [6, 3], direction: 'up' },
      { id: 'c', cells: [[1, 1], [1, 2], [2, 2]], head: [2, 2], direction: 'right' },
      { id: 'd', cells: [[3, 6], [2, 6]], head: [2, 6], direction: 'left' }
    ]
  },
  {
    id: 5,
    name: 'Three Locks',
    gridWidth: 6,
    gridHeight: 6,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[2, 3], [3, 3], [4, 3]], head: [4, 3], direction: 'right' },
      { id: 'b', cells: [[5, 3], [5, 2], [4, 2]], head: [4, 2], direction: 'up' },
      { id: 'c', cells: [[2, 6], [3, 6], [3, 5]], head: [3, 5], direction: 'up' },
      { id: 'd', cells: [[1, 4], [1, 5]], head: [1, 5], direction: 'down' }
    ]
  },
  {
    id: 6,
    name: 'Long Hall',
    gridWidth: 7,
    gridHeight: 7,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[2, 2], [3, 2], [4, 2], [5, 2]], head: [5, 2], direction: 'right' },
      { id: 'b', cells: [[6, 2], [6, 3], [5, 3]], head: [5, 3], direction: 'left' },
      { id: 'c', cells: [[7, 6], [6, 6], [6, 5]], head: [6, 5], direction: 'up' },
      { id: 'd', cells: [[1, 7], [2, 7], [2, 6]], head: [2, 6], direction: 'up' }
    ]
  },
  {
    id: 7,
    name: 'Mirror Bends',
    gridWidth: 7,
    gridHeight: 7,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[3, 4], [4, 4], [4, 3]], head: [4, 3], direction: 'up' },
      { id: 'b', cells: [[4, 1], [5, 1], [6, 1]], head: [6, 1], direction: 'right' },
      { id: 'c', cells: [[2, 7], [3, 7], [3, 6]], head: [3, 6], direction: 'up' },
      { id: 'd', cells: [[7, 4], [7, 5], [6, 5]], head: [6, 5], direction: 'left' },
      { id: 'e', cells: [[1, 2], [1, 3]], head: [1, 2], direction: 'up' }
    ]
  },
  {
    id: 8,
    name: 'Zig Lane',
    gridWidth: 7,
    gridHeight: 7,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[2, 5], [3, 5], [4, 5], [4, 4]], head: [4, 4], direction: 'up' },
      { id: 'b', cells: [[4, 2], [5, 2], [6, 2]], head: [6, 2], direction: 'right' },
      { id: 'c', cells: [[6, 6], [6, 5], [5, 5]], head: [5, 5], direction: 'left' },
      { id: 'd', cells: [[1, 1], [2, 1], [2, 2]], head: [2, 2], direction: 'down' },
      { id: 'e', cells: [[7, 7], [7, 6]], head: [7, 6], direction: 'up' }
    ]
  },
  {
    id: 9,
    name: 'Crossline',
    gridWidth: 7,
    gridHeight: 7,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[2, 3], [3, 3], [4, 3]], head: [4, 3], direction: 'right' },
      { id: 'b', cells: [[5, 3], [5, 4], [4, 4]], head: [4, 4], direction: 'left' },
      { id: 'c', cells: [[3, 6], [3, 5], [2, 5]], head: [2, 5], direction: 'left' },
      { id: 'd', cells: [[7, 2], [6, 2], [6, 1]], head: [6, 1], direction: 'up' },
      { id: 'e', cells: [[1, 7], [2, 7], [2, 6]], head: [2, 6], direction: 'up' }
    ]
  },
  {
    id: 10,
    name: 'Final Route',
    gridWidth: 7,
    gridHeight: 7,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[3, 2], [4, 2], [5, 2]], head: [5, 2], direction: 'right' },
      { id: 'b', cells: [[6, 2], [6, 3], [5, 3]], head: [5, 3], direction: 'left' },
      { id: 'c', cells: [[2, 4], [2, 5], [3, 5]], head: [3, 5], direction: 'right' },
      { id: 'd', cells: [[4, 6], [5, 6], [5, 5]], head: [5, 5], direction: 'up' },
      { id: 'e', cells: [[1, 1], [1, 2], [2, 2]], head: [2, 2], direction: 'right' },
      { id: 'f', cells: [[7, 7], [6, 7]], head: [6, 7], direction: 'left' }
    ]
  }
];
