const ImageGalleryItem = ({ images }) => (
  images.map((image) => (       
    <li key={ image.id }className="ImageGalleryItem">
      <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
    </li>
  ))
)

export default ImageGalleryItem;