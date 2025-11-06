import "./nav.css";

const NavBar = ({ onPairCountChange }) => {
    
    const pairOptions = [3, 4, 5, 6];

    return (
        <nav className="navbar dinomorphia-nav">
            <div className="pair-options">
                <div className="difficulty-selector">
                    {pairOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => onPairCountChange(option)}
                            className="difficulty-btn"
                            aria-label={`Jouer avec ${option} paires de cartes`}
                        >
                            {option} Paires
                            <span className="difficulty-level">
                                {getDifficultyText(option)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

// Fonction helper pour le texte de difficulté
const getDifficultyText = (pairs) => {
    switch(pairs) {
        case 3: return "Facile";
        case 4: return "Normal"; 
        case 5: return "Difficile";
        case 6: return "Expert";
        default: return "";
    }
};

export default NavBar;