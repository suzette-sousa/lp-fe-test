import './AboIcon.scss';

const AboIcon = (props) => {
  const { small, large } = props;

  const size = small ? 24 : large ? 36 : 30;

  return (
    <span className="abo-icon" title="Réservé aux abonnés">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <use href="#lp-icon-le-parisien" />
      </svg>
    </span>
  );
};

export default AboIcon;
