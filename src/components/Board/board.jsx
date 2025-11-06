import Card from '../Card/card';
import './board.css';

const Board =({cards, onCardClick, pairCount}) => {
    const getGridColumns = () =>{
        const totalCards = pairsCount * 2;

        if(totalCards<= 8) return 4;
        if(totalCards<= 12) return 4;
        if(totalCards<=16) return 4;
        if(totalCards<=20) return 5;
        return 6;
    }
}