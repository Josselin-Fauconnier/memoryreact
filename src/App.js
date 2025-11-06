import Header from './components/Header/header';
import NavBar from './components/Nav-bar/nav-bar';
import Board from './components/Board/board';
import GameStatus from './components/GameStatus/gameStatus';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [pairCount, setPairCount] = useState(4);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);

  const generateCards = (pairCount) => {
   
    const values = Array.from({ length: pairCount }, (_, i) => i + 1);
    const cardPairs = [...values, ...values]; // Créer les paires
    
    
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    const shuffled = shuffleArray(cardPairs);
    
    return shuffled.map((value, index) => ({
      id: index,
      value: value,
      isFlipped: false,
      isMatched: false
    }));
  };

  
  const restartGame = () => {
    setCards(generateCards(pairCount));
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
  };

  
  useEffect(() => {
    restartGame();
  }, [pairCount]);

  
  const handleCardClick = (cardId) => {
    
    if (flippedCards.length === 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (card.isFlipped || card.isMatched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);
    
   
    setCards(prev => prev.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    ));

   
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      setTimeout(() => {
        if (firstCard.value === secondCard.value) {
          
          setCards(prev => prev.map(c => 
            (c.id === firstId || c.id === secondId) 
              ? { ...c, isMatched: true }
              : c
          ));
          setMatchedPairs(prev => [...prev, firstCard.value]);
        } else {
          setCards(prev => prev.map(c => 
            (c.id === firstId || c.id === secondId) 
              ? { ...c, isFlipped: false }
              : c
          ));
        }
        setFlippedCards([]);
      }, 500); 
    }
  };

  const handlePairCountChange = (count) => {
    setPairCount(count);
  };

  const isGameComplete = matchedPairs.length === pairCount;

  return (
    <div>
      <Header/> 
      <main>
        <NavBar onPairCountChange={handlePairCountChange}/>
        
        <GameStatus 
          isGameComplete={isGameComplete}
          moves={moves}
          matchedPairs={matchedPairs}
          pairCount={pairCount}
          onRestart={restartGame}
        />
        
        <Board 
          cards={cards}
          onCardClick={handleCardClick}
          pairCount={pairCount}
        />
      </main>
    </div>
  );
}

export default App;