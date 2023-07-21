import Link from 'next/link';
import AboIcon from '../AboIcon/AboIcon';
import './RelatedArticles.scss';

const RelatedArticles = (props) => {
  const { article } = props;

  return (
    <>
      {article.related_stories && (
        <aside className="related-articles">
          {article.related_stories?.map((related_story) => (
            <h4 key={related_story._id} className="related-articles_title">
              <Link
                href={`https://www.leparisien.fr${related_story.website_url}`}
                className="related-article_link"
              >
                {related_story.headlines.basic}

                {related_story.label.profil?.text === 'ABO' && (
                  <AboIcon small />
                )}
              </Link>
            </h4>
          ))}
        </aside>
      )}
    </>
  );
};

export default RelatedArticles;
