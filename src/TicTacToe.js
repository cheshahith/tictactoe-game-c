import React, { useState } from 'react';
// import '../src/tictactoe.css'; // Import the CSS file for styling
import './TicTacToe.css'; // Import the CSS file for styling

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [, setWinningLine] = useState(null);

  const handleClick = (index) => {
    if (board[index] !== '' || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const winnerInfo = checkWinner(newBoard);
    if (winnerInfo) {
      setWinningLine(winnerInfo.line);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setIsXTurn(true);
    setWinningLine(null);
  };

  const winner = checkWinner(board)?.winner;

  return (
    <div>
      <h2>Tic-Tac-Toe</h2>
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      {winner && <h3 className="winner-text">Winner: {winner} 🎉</h3>}
      <button onClick={resetGame} className="reset-button">Reset Game</button>
    </div>
  );
}

function checkWinner(board) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: pattern };
    }
  }
  return null;
}

export default TicTacToe;
