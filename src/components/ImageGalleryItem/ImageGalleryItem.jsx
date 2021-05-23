const ImageGalleryItem = ({ imgArray }) => (
  imgArray.map((item) => (       
    <li key={ item.id }className="ImageGalleryItem">
      <img src={item.webformatURL} alt={item.tags} className="ImageGalleryItem-image" />
    </li>
  ))
)

export default ImageGalleryItem;