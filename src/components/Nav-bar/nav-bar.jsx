import "./nav.css";

const NavBar = ({ onPairCountChange }) => {
    const pairOptions = [4, 6, 8, 10, 12];

    return (
        <nav className="navbar">
            <div className="pair-options">
                {pairOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => onPairCountChange(option)}
                    >
                        {option} Paires
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;