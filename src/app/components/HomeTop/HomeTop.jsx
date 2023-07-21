//This is an static component for the bloc 'en-continu'
//import EnContinu from "./static/en-continu";
'use client';

import EnContinu from '../static/en-continu';
import { useState, useEffect } from 'react';
import Articles from '../Articles/Articles';
import './HomeTop.scss';
import AboCard from '../AboCard/AboCard';

const HomeTop = () => {
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
    <>
      <Articles articles={articles} />

      <AboCard />

      <aside className="hometop_encontinu">
        <EnContinu />
      </aside>
    </>
  );
};

export default HomeTop;
