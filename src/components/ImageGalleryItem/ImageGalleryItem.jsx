import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onClick }) => (
  images.map(({id, largeImageURL, webformatURL, tags}) => (
    <li key={id} className="ImageGalleryItem" onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ))
)

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem;