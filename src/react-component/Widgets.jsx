// Список виджетов (4й фрагмент страницы)

import React from 'react';
import WidgetItem from './WidgetItem';

function Widgets() {
  return (
    <div className='widgets-list'>
      <WidgetItem title='Погода'>
        <div className='widget-section'>Погода в Москве</div>
      </WidgetItem>
      <WidgetItem title='Карта Мира'>
        <div className='widget-section'>Карта Мира в масштабе</div>
      </WidgetItem>
      <WidgetItem title='Посещаемое'>
        <div className='widget-section'>Недвижимость</div>
        <div className='widget-section'>Маркетинг</div>
        <div className='widget-section'>Авто</div>
      </WidgetItem>
    </div>
  );
}

export default Widgets;
