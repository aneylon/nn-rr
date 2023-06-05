import "./SingleCard.css";

const SingleCard = ({ card, selectCard, flipped, disabled }) => {
  const handleSelect = () => {
    if (!disabled) {
      console.log("select card :");
      selectCard(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleSelect}
        />
      </div>
    </div>
  );
};

export default SingleCard;
