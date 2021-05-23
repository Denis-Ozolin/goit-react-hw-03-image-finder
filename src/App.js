import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import Loader from './components/Loader/Loader';
// import Button from './components/Button/Button';
// import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: []
  }

  // https://pixabay.com/api/?key=20731913-04720c2299aa0ca3b12520f7d

  
  componentDidMount() {
    // const BASE_URL = 'https://pixabay.com/api/';
    // const KEY = '20731913-04720c2299aa0ca3b12520f7d';
    
    // axios.get('https://pixabay.com/api/?q=cat&page=1&key=20731913-04720c2299aa0ca3b12520f7d&image_type=photo&orientation=horizontal&per_page=12')
    //   .then(({data}) => {
    //     this.setState({ images: data.hits })
    //     console.log(this.state.images);
    //   }).catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  onChangeQuery = query => {   
      axios.get(`https://pixabay.com/api/?q=${query}&page=1&key=20731913-04720c2299aa0ca3b12520f7d&image_type=photo&orientation=horizontal&per_page=12`)
      .then(({data}) => {
        this.setState({ images: data.hits })
      }).catch(error => console.log('error !!!'));
  }

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="ImageGallery">
          {images.map(({id, webformatURL, tags}) => (
          
              <li key={ id }className="ImageGalleryItem">
                <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
              </li>
          ))}
        </ul>
        <ImageGallery>
          <ImageGalleryItem imgArray={ images }/>
        </ImageGallery>
      </>
    )
  }
}

export default App;

  /* <Searchbar/>
    <ImageGallery/>
    <ImageGalleryItem/>
    <Loader/>
    <Button/> */
    /* <Modal /> */
