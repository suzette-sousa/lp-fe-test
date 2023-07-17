//This is an static component for the bloc 'en-continu'
//import EnContinu from "./static/en-continu";
'use client';

import Image from 'next/image';
import EnContinu from './static/en-continu';
import { useState, useEffect } from 'react';
import Article from './Article';

const Content = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = () => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((articles) => setArticles(articles))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="layout-homepage__top">
      <div className="lp-container lp-container--fixed-narrow">
        <div className="arcad__wrapper">
          <Image
            src="/images/ad.jpg"
            alt="Publicité"
            width={243}
            height={150}
            quality={80}
            priority="false"
            className="lp-image-responsive__img"
          />

          <section className="relative">
            <div className="homepage__top ">
              <div className="homepage__top-spotlight-main">
                <div className="stories">
                  <ul className="stories__list stories__list--une">
                    <Article
                      className="lp-card-article--une"
                      article={articles.find(
                        (article) =>
                          article._id === '3WF5K62SQ5DALK3FJ5PJVAB254'
                      )}
                    />
                  </ul>
                </div>
              </div>

              <div className="homepage__top-right">
                <EnContinu />
              </div>

              <div className="homepage__top-spotlight-articles">
                <div className="stories">
                  <ul className="stories__list stories__item">
                    {articles
                      .filter(
                        (article, _i) =>
                          article._id !== '3WF5K62SQ5DALK3FJ5PJVAB254' &&
                          article._id !== '5R4EPGS4WJGGXNDELGJIUUKUMQ' &&
                          _i < 4
                      )
                      .map((article) => (
                        <li key={article._id} className="stories__item">
                          <Article
                            article={article}
                            className="lp-card-article--large"
                          />
                        </li>
                      ))}
                  </ul>
                </div>

                <section className="section section--locales padding_horizontal_md padding_vertical_ten mb_4">
                  <div className="lp-container lp-container--fixed-narrow">
                    <div className="stories">
                      <ul className="stories__list stories__item">
                        <Article
                          className="lp-card-article--une"
                          article={articles.find(
                            (article) =>
                              article._id === '5R4EPGS4WJGGXNDELGJIUUKUMQ'
                          )}
                        />
                      </ul>
                    </div>
                  </div>
                </section>

                <div className="stories">
                  <ul className="stories__list stories__item">
                    {articles
                      .filter(
                        (article, _i) =>
                          article._id !== '3WF5K62SQ5DALK3FJ5PJVAB254' &&
                          article._id !== '5R4EPGS4WJGGXNDELGJIUUKUMQ' &&
                          _i >= 4 &&
                          _i < 6
                      )
                      .map((article) => (
                        <li key={article._id} className="stories__item">
                          <Article
                            article={article}
                            className="lp-card-article--large"
                          />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Content;
