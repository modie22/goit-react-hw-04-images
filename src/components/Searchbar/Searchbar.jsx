import { Component } from 'react';
import Notiflix from 'notiflix';
import css from './Searchbar.module.css'

class Searchbar extends Component {
  state = {
    inputData: '',
  };
  onChangeInput = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const searchQuery = this.state.inputData.trim();
    e.preventDefault();
    if (searchQuery.trim() === '') {
      Notiflix.Notify.info(
        'Please, enter search word!'
      );
      return;
    }

    this.props.onSubmit(searchQuery);
    this.setState({ inputData: '' });
  };
  render() {
    const { inputData } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            Search
          </button>

          <input
            className={css.searchFormInput}
            name="inputData"
            value={inputData}
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
