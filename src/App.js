import React, { useRef } from 'react';
import TicTacToe from './TicTacToe';

function App() {
  const ticTacToeRef = useRef();

  const handleReset = () => {
    if (ticTacToeRef.current && ticTacToeRef.current.resetGame) {
      ticTacToeRef.current.resetGame();
    }
  };

  return (
    <div>
      <TicTacToe ref={ticTacToeRef} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;