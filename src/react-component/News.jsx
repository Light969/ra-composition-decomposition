// Список новостей (1й фрагмент страницы)

import React from 'react';
import NewsItem from './NewsItem';

function News() {
  return (
    <div className="news-list">
      <NewsItem>
        <p className="news">Упрощено получение автомобильных номеров</p>
      </NewsItem>
      <NewsItem>
        <p className="news">Раскрыли план реформ</p>
      </NewsItem>
      <NewsItem>
        <p className="news">Турпомощь</p>
      </NewsItem>
      <NewsItem>
        <p className="news">Суд закрыл очередное дело</p>
      </NewsItem>
      <NewsItem>
        <p className="news">Поручили сосздать что то новое</p>
      </NewsItem>
    </div>
  );
}

export default News;
