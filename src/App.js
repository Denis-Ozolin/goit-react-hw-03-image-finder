import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    largeImgUrl: '',
  }

  apiSettings = {
    BASE_URL: 'https://pixabay.com/api/',
    KEY: '20731913-04720c2299aa0ca3b12520f7d',
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    })
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const { BASE_URL, KEY } = this.apiSettings;

    this.setState({isLoading: true})

    axios.get(`${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(({data}) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }))
        if(currentPage > 1)this.onScrollPage();
      })
      .catch(error => this.setState({error}))
      .finally(() => this.setState({ isLoading: false }));
  }

  onScrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  openModal = (url) => {
    this.setState({largeImgUrl: url})
  }

  closeModal = () => (
    this.setState({largeImgUrl: ''})
  )

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.closeModal();
    }
  }
  
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) this.closeModal();
  }

  render() {
    const { images, isLoading, largeImgUrl } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery children>
          <ImageGalleryItem images={images} onClick={this.openModal}/>
        </ImageGallery>
        {isLoading && <Loader/>}
        {images.length && !isLoading ? <Button btnName={"Load more"} onClick={this.fetchImages} /> : null}
        {largeImgUrl && <Modal url={largeImgUrl} onClick={this.handleBackdropClick}/>}
      </>
    )
  }
}

export default App;
