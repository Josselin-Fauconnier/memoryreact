import './card.css';

const Card = ({ card, onClick }) => {
  const { value, isFlipped, isMatched } = card;

  const dinomorphiaCards = [
    'DinomorphiaAlert',
    'DinomorphiaBrute', 
    'DinomorphiaDiplos',
    'DinomorphiaDomain',
    'DinomorphiaFrenzy',
    'DinomorphiaIntact',
    'DinomorphiaKentregina',
    'DinomorphiaReversion',
    'DinomorphiaRexterm',
    'DinomorphiaShell',
    'DinomorphiaSonic',
    'DinomorphiaStealthbergia'
  ];

  const getCardImage = (value) => {
    const cardName = dinomorphiaCards[value - 1];
    return `/images/cards/${cardName}.webp`;
  };

  const cardBackImage = '/images/cards/Dos.webp';

  return (
    <div
      className={`card yugioh-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Carte ${isFlipped || isMatched ? dinomorphiaCards[value - 1] : 'cachée'}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="card-inner">
        <div className="card-front">
          <img 
            src={cardBackImage}
            alt="Dos de carte Yu-Gi-Oh"
            className="card-image"
            loading="lazy"
          />
        </div>
        <div className="card-back">
          <img 
            src={getCardImage(value)}
            alt={`Carte ${dinomorphiaCards[value - 1]}`}
            className="card-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;