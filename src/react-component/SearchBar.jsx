// Поисковая строка (2й фрагмент страницы)

import React from 'react';

function SearchBar() {
  return (
    <div className='search-bar'>
      <form>
        <div>
          <input type='text'/>
        </div>
        <button type='submit'>Найти</button>
      </form>
    </div>
  );
}

export default SearchBar;
