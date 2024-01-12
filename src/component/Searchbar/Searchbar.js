import { useState } from 'react';

import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [inputSearch, setInputSearch] = useState('');

  const handleInputChange = e => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputSearch);
    reset();
  };

  const reset = () => {
    setInputSearch('');
  };

  return (
    <header className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          value={inputSearch}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;
