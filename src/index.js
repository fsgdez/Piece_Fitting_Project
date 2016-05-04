import readInput from './readInput.js';
import {PieceBlock} from './PieceBlock.js';
import {CubeState, newCubeMat, StateQueue} from './cubeMat.js';

// Read Inputs (Synchronous Read)
// [0] - Cube Dimension , [1] Number of Pieces , [2+] Cube Positions as Seperate 2D arrays
// -----------------------------------------------------------------------------
let piecesData = readInput('./src/Input.txt');
let pieceNames = [];
let Pieces = [];

// Generate Names
// -----------------------------------------------------------------------------
for (let i = 0; i < piecesData[1]; i++) {
  pieceNames.push('piece' + String.fromCharCode(65 + i));
  Pieces.push(new PieceBlock(piecesData[i + 2], pieceNames[i]));
}

// Create State Depth First Searcher Object
// -----------------------------------------------------------------------------
let cubeDim = piecesData[0];
let totalPieces = piecesData[1];
let states = new StateQueue(cubeDim, totalPieces, Pieces);
console.time('solver');
let solvedState = states.stateDepthFirstSearch(null);
console.timeEnd('solver');
console.log(solvedState);
