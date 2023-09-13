import React from 'react';
function WidgetItem({ title, ...props }) {
  return (
    <div className='widget-item'>
      <h3>{title}</h3>
      {props.children}
    </div>
  );
}

export default WidgetItem;
