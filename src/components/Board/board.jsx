import Card from '../Card/card';
import './board.css';

const Board = ({ cards, onCardClick, pairCount }) => {
  
  const getGridColumns = () => {
    const totalCards = pairCount * 2;
    
  
    if (totalCards <= 8) return 4;
    if (totalCards <= 12) return 4;
    if (totalCards <= 16) return 4;
    if (totalCards <= 20) return 5;
    return 6;
  };

  const gridStyle = {
    gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
  };

  return (
    <div 
      className="board" 
      style={gridStyle}
      role="grid"
      aria-label={`Plateau de jeu avec ${pairCount * 2} cartes`}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default Board;