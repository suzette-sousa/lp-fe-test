import React from 'react';
import Article from '../Article/Article';
import RelatedArticles from '../RelatedArticles/RelatedArticles';

const Articles = (props) => {
  const { articles } = props;

  return (
    <>
      {articles.map((article, _i) => (
        <div key={article._id} className="hometop_articles">
          <Article
            article={article}
            small={_i === 3 || _i === 4 || _i === 6 || _i === 8 || _i === 11}
            className={_i === 0 && 'article--alaune'}
          />
          <RelatedArticles article={article} />
        </div>
      ))}
    </>
  );
};

export default Articles;
