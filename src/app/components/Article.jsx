import Image from 'next/image';
import Link from 'next/link';
import AboIcon from './AboIcon';

const Article = (props) => {
  const { article, className } = props;

  return (
    <article
      className={`lp-card-article ${
        className ? className : 'lp-card-article--default'
      } lp-card-article--with-img lp-font-smoothing lp-color-text lp-box-sizing`}
    >
      {article.promo_items?.basic.url && (
        <div className="lp-card-article__media">
          <div className="lp-image-responsive">
            <Image
              src={`/images${article.promo_items.basic.url}`}
              width={article.promo_items.basic.width}
              height={article.promo_items.basic.height}
              alt={article.headlines.basic}
              className="lp-image-responsive__img"
              // TODO: Opti srcset sizes
              quality={80}
              placeholder="blur"
              blurDataURL={
                article.promo_items.basic.data_url ||
                'data:image/webp;base64,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' //TODO: A mettre dans un fichier à part
              }
            />
          </div>
        </div>
      )}

      <p className="lp-card-article__tags-text lp-f-subtitle-06 lp-color-brand">
        {article.label?.format?.text}
      </p>

      <Link
        href={`https://www.leparisien.fr${article.website_url}`}
        className="lp-card-article__link lp-f-title-02-strong"
      >
        {article.headlines.basic}

        <AboIcon displayed={article.label.profil?.text === 'ABO'} size={36} />
      </Link>

      <p className="lp-card-article__text lp-f-body-03">
        {article.subheadlines?.basic}
      </p>

      {article.related_stories && (
        <ul className="lp-card-article__related">
          {article.related_stories.map((related_story) => (
            <li
              key={related_story._id}
              className="lp-card-article__related-item"
            >
              <p className="lp-card-article__related-title lp-f-subtitle-06">
                {related_story.label?.format?.text && (
                  <span className="lp-card-article__related-tag lp-f-subtitle-06">
                    {related_story.label?.format?.text}
                  </span>
                )}

                <Link
                  href={`https://www.leparisien.fr${related_story.website_url}`}
                  className="lp-card-article__related-link"
                >
                  {related_story.headlines.basic}

                  <AboIcon
                    displayed={article.label.profil?.text === 'ABO'}
                    size={24}
                  />
                </Link>
              </p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Article;
