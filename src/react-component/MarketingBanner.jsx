// Рекламный баннер (3й фрагмент страницы)

import React from 'react';

function MarketingBanner(props) {
  return (
    <img className='marketing-banner' 
      alt='Банер-заглушка'
      src={"https://oboitut.com/uploads/posts/2016-05/thumbs/_oboitut.com_1462713283.jpg"}
      style={{ width: 'auto', height: '250px' }}
    />
  );
}

export default MarketingBanner;
