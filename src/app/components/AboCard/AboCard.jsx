import './AboCard.scss';

const AboCard = () => {
  return (
    <div className="abo-card">
      <span>
        <span className="abo-card_label">
          Durée limitée • Lorem ipsum sum sum
        </span>
      </span>
      <div className="abo-card_inner">
        <div>text content</div>
        <div>img</div>
      </div>
    </div>
  );
};

export default AboCard;
