
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from './fetch/fetch';
import Searchbar from './Searchbar/Searchbar';
import Notiflix from 'notiflix';
import Loader from './Loader/Loader';
import css from './App.module.css'
import { useState,useCallback,useEffect } from 'react';

function App () {

  const [inputData,setInputData]= useState(null);
  const [items,setItems]= useState([]);
  const [status,setStatus]= useState('idle');
  const [totalHitsX,setTotalHitsX]= useState(0);
  const [page,setPage]= useState(0);

  const createSearch = useCallback( async () => {
    try {
      setStatus('pending')
      const { totalHits, hits } = await fetchImages(
        inputData,
        page
      );
      if (hits.length < 1) {
        setStatus('idle');
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        setItems(hits);
        setTotalHitsX(totalHits);
        setStatus('resolved');
      }
    } catch (error) {
      setStatus('rejected');
    }
  },[inputData, page]);
  const handleSubmit = inputDataE => {
    if (inputData===inputDataE) {
      Notiflix.Notify.info('You are already viewing images with this request.');
      return;
    }
    setInputData(inputDataE.toLowerCase());
    setPage(1);
    setItems([]);
  };

  const loadingNext = useCallback( async () => {
    setStatus('pending')

    try {
      const { hits } = await fetchImages(inputData,page);
      setItems(state=>{return [...state,...hits]});
      setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
    }
  },[inputData, page]);
  const onNextPage = async () => {
    setPage(state=>state+1)
  };

  useEffect(()=>{
    createSearch();
  },[createSearch])
  useEffect(()=>{
    loadingNext();
  },[loadingNext])

    if (status === 'idle') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={handleSubmit} />
        </div>
      );
    }
    if (status === 'pending') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery page={page} items={items} />
          <Loader />
          {totalHitsX > 12 && <Button onClick={onNextPage} />}
        </div>
      );
    }
    if (status === 'rejected') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={handleSubmit} />
          <p>Something wrong, try later</p>
        </div>
      );
    }
    if (status === 'resolved') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery page={page} items={items} />
          {totalHitsX > 12 && totalHitsX > items.length && (
            <Button onClick={onNextPage} />
          )}
        </div>
      );
    }
  
}
export default App;

/* 
class App extends Component {
  state = {
    inputData: null,
    items: [],

    status: 'idle',
    totalHits: 0,
    page: 0,
  };
  
  componentDidUpdate(prevProps, prevState) {

    if (prevState.inputData !== this.state.inputData ) {
      this.createSearch();
    }
     else if (prevState.page !== this.state.page) {
      this.loadingNext();
    } 
  }
  createSearch = async () => {
    try {
      this.setState({ status: 'pending' });
      const { totalHits, hits } = await fetchImages(
        this.state.inputData,
        this.state.page
      );
      if (hits.length < 1) {
        this.setState({ status: 'idle' });
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        this.setState({
          items: hits,
          totalHits: totalHits,
          status: 'resolved',
        });
      }
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };
  handleSubmit = inputData => {
    if (this.state.inputData===inputData) {
      Notiflix.Notify.info('You are already viewing images with this request.');
      return;
    }
    this.setState({inputData: inputData.toLowerCase(), page: 1, items: [] });  
  };
  loadingNext = async () => {
    this.setState({ status: 'pending' });

    try {
      const { hits } = await fetchImages(this.state.inputData, this.state.page);
      this.setState(prevState => ({
        items: [...prevState.items, ...hits],
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };
  onNextPage = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { totalHits, status, items } = this.state;
    if (status === 'idle') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
        </div>
      );
    }
    if (status === 'pending') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery page={this.state.page} items={this.state.items} />
          <Loader />
          {totalHits > 12 && <Button onClick={this.onNextPage} />}
        </div>
      );
    }
    if (status === 'rejected') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
          <p>Something wrong, try later</p>
        </div>
      );
    }
    if (status === 'resolved') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery page={this.state.page} items={this.state.items} />
          {totalHits > 12 && totalHits > items.length && (
            <Button onClick={this.onNextPage} />
          )}
        </div>
      );
    }
  }
}
export default App;
 */