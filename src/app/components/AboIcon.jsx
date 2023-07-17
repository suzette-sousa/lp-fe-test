function AboIcon(props) {
  const { displayed, size } = props;

  return (
    <>
      {displayed && (
        <span className="lp-card-article__nowrap" title="Réservé aux abonnés">
          <svg
            className={`lp-marker-p lp-marker-p--size-${
              size ? size : 24
            } lp-color-subscription`}
            viewBox="0 0 40 40"
          >
            <use href="#lp-icon-le-parisien" />
          </svg>
        </span>
      )}
    </>
  );
}

export default AboIcon;
