import { useState, useEffect } from 'react';
import './gameStatus.css';

const GameStatus = ({ 
  isGameComplete, 
  moves, 
  matchedPairs, 
  pairCount, 
  onRestart 
}) => {
  const [showRestartButton, setShowRestartButton] = useState(false);

  useEffect(() => {
    if (isGameComplete) {
      const timer = setTimeout(() => {
        setShowRestartButton(true);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowRestartButton(false);
    }
  }, [isGameComplete]);

  const handleRestart = () => {
    setShowRestartButton(false);
    onRestart();
  };

  return (
    <div className="game-status">
      <div className="game-info">
        <p className="moves-counter">Coups: {moves}</p>
        <p className="pairs-counter">
          Paires trouvées: {matchedPairs.length}/{pairCount}
        </p>
      </div>
      
      {isGameComplete && (
        <div className="victory-section">
          <div className="victory-message">
            <h2 className="victory-title"> Victoire </h2>
            <p className="victory-stats">
              Terminé en {moves} coups avec {pairCount} paires !
            </p>
          </div>
          
          {showRestartButton && (
            <button 
              className="restart-button"
              onClick={handleRestart}
              aria-label="Commencer une nouvelle partie"
            >
               Refaire une partie
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GameStatus;