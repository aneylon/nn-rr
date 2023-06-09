import "./App.css";
import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
const cardImages = [
  { matched: false, src: "/img/helmet-1.png" },
  { matched: false, src: "/img/potion-1.png" },
  { matched: false, src: "/img/ring-1.png" },
  { matched: false, src: "/img/scroll-1.png" },
  { matched: false, src: "/img/shield-1.png" },
  { matched: false, src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const selectCard = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  const shuffleCards = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index, randoId: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };
  const resetTurn = () => {
    setTurns((prevTurn) => ++prevTurn);
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log(choiceOne.src, choiceTwo.src);
        console.log("SAME");
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log("No match");
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className="App">
      <h1>Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div>turn: {turns} </div>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            selectCard={selectCard}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
