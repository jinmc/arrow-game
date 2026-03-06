import type { Stage } from '../logic/types';

export const stages: Stage[] = [
  {
    id: 1,
    name: 'Warmup Lane',
    gridWidth: 10,
    gridHeight: 10,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[4, 4], [5, 4], [6, 4]], head: [6, 4], direction: 'right' },
      { id: 'b', cells: [[5, 7], [6, 7], [6, 6]], head: [6, 6], direction: 'up' },
      { id: 'c', cells: [[8, 8], [7, 8]], head: [7, 8], direction: 'left' }
    ]
  },
  {
    id: 2,
    name: 'First Bend',
    gridWidth: 10,
    gridHeight: 10,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[4, 6], [5, 6], [5, 5]], head: [5, 5], direction: 'up' },
      { id: 'b', cells: [[5, 4], [6, 4], [7, 4]], head: [7, 4], direction: 'right' },
      { id: 'c', cells: [[8, 7], [7, 7], [7, 8]], head: [7, 8], direction: 'down' }
    ]
  },
  {
    id: 3,
    name: 'Split Exit',
    gridWidth: 12,
    gridHeight: 12,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[5, 5], [6, 5], [7, 5]], head: [7, 5], direction: 'right' },
      { id: 'b', cells: [[8, 5], [8, 6]], head: [8, 6], direction: 'down' },
      { id: 'c', cells: [[4, 9], [5, 9], [5, 8]], head: [5, 8], direction: 'up' },
      { id: 'd', cells: [[9, 9], [9, 8], [8, 8]], head: [8, 8], direction: 'left' }
    ]
  },
  {
    id: 4,
    name: 'Corner Pressure',
    gridWidth: 12,
    gridHeight: 12,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[7, 7], [7, 6], [8, 6]], head: [8, 6], direction: 'right' },
      { id: 'b', cells: [[9, 8], [9, 7], [9, 6]], head: [9, 6], direction: 'up' },
      { id: 'c', cells: [[4, 4], [4, 5], [5, 5]], head: [5, 5], direction: 'right' },
      { id: 'd', cells: [[6, 9], [5, 9]], head: [5, 9], direction: 'left' }
    ]
  },
  {
    id: 5,
    name: 'Three Locks',
    gridWidth: 12,
    gridHeight: 12,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[5, 6], [6, 6], [7, 6]], head: [7, 6], direction: 'right' },
      { id: 'b', cells: [[8, 6], [8, 5], [7, 5]], head: [7, 5], direction: 'up' },
      { id: 'c', cells: [[5, 9], [6, 9], [6, 8]], head: [6, 8], direction: 'up' },
      { id: 'd', cells: [[4, 7], [4, 8]], head: [4, 8], direction: 'down' }
    ]
  },
  {
    id: 6,
    name: 'Long Hall',
    gridWidth: 14,
    gridHeight: 14,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[5, 5], [6, 5], [7, 5], [8, 5]], head: [8, 5], direction: 'right' },
      { id: 'b', cells: [[9, 5], [9, 6], [8, 6]], head: [8, 6], direction: 'left' },
      { id: 'c', cells: [[10, 9], [9, 9], [9, 8]], head: [9, 8], direction: 'up' },
      { id: 'd', cells: [[4, 10], [5, 10], [5, 9]], head: [5, 9], direction: 'up' }
    ]
  },
  {
    id: 7,
    name: 'Mirror Bends',
    gridWidth: 14,
    gridHeight: 14,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[6, 7], [7, 7], [7, 6]], head: [7, 6], direction: 'up' },
      { id: 'b', cells: [[7, 4], [8, 4], [9, 4]], head: [9, 4], direction: 'right' },
      { id: 'c', cells: [[5, 10], [6, 10], [6, 9]], head: [6, 9], direction: 'up' },
      { id: 'd', cells: [[10, 7], [10, 8], [9, 8]], head: [9, 8], direction: 'left' },
      { id: 'e', cells: [[4, 5], [4, 6]], head: [4, 5], direction: 'up' }
    ]
  },
  {
    id: 8,
    name: 'Zig Lane',
    gridWidth: 14,
    gridHeight: 14,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[5, 8], [6, 8], [7, 8], [7, 7]], head: [7, 7], direction: 'up' },
      { id: 'b', cells: [[7, 5], [8, 5], [9, 5]], head: [9, 5], direction: 'right' },
      { id: 'c', cells: [[9, 9], [9, 8], [8, 8]], head: [8, 8], direction: 'left' },
      { id: 'd', cells: [[4, 4], [5, 4], [5, 5]], head: [5, 5], direction: 'down' },
      { id: 'e', cells: [[10, 10], [10, 9]], head: [10, 9], direction: 'up' }
    ]
  },
  {
    id: 9,
    name: 'Crossline',
    gridWidth: 14,
    gridHeight: 14,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[5, 6], [6, 6], [7, 6]], head: [7, 6], direction: 'right' },
      { id: 'b', cells: [[8, 6], [8, 7], [7, 7]], head: [7, 7], direction: 'left' },
      { id: 'c', cells: [[6, 9], [6, 8], [5, 8]], head: [5, 8], direction: 'left' },
      { id: 'd', cells: [[10, 5], [9, 5], [9, 4]], head: [9, 4], direction: 'up' },
      { id: 'e', cells: [[4, 10], [5, 10], [5, 9]], head: [5, 9], direction: 'up' }
    ]
  },
  {
    id: 10,
    name: 'Final Route',
    gridWidth: 14,
    gridHeight: 14,
    lives: 3,
    pieces: [
      { id: 'a', cells: [[6, 5], [7, 5], [8, 5]], head: [8, 5], direction: 'right' },
      { id: 'b', cells: [[9, 5], [9, 6], [8, 6]], head: [8, 6], direction: 'left' },
      { id: 'c', cells: [[5, 7], [5, 8], [6, 8]], head: [6, 8], direction: 'right' },
      { id: 'd', cells: [[7, 9], [8, 9], [8, 8]], head: [8, 8], direction: 'up' },
      { id: 'e', cells: [[4, 4], [4, 5], [5, 5]], head: [5, 5], direction: 'right' },
      { id: 'f', cells: [[10, 10], [9, 10]], head: [9, 10], direction: 'left' }
    ]
  }
];
