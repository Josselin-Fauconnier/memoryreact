import './card.css';

const Card = ({ card, onClick }) => {
  const { value, isFlipped, isMatched } = card;

 
  const getCardImage = (value) => {
    return `/images/cards/card-${value}.webp`;
  };

  const cardBackImage = '/images/cards/Dos.webp';

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Carte ${isFlipped || isMatched ? `avec valeur ${value}` : 'cachée'}`}
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
            alt="Dos de carte"
            className="card-image"
            loading="lazy"
          />
        </div>
        <div className="card-back">
          <img 
            src={getCardImage(value)}
            alt={`Carte numéro ${value}`}
            className="card-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;