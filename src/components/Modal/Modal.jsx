import PropTypes from 'prop-types';

const Modal = ({ url, onClick }) => (
  <div className="Overlay" onClick={onClick}>
    <div className="Modal">
      <img src={url} alt=""/>
    </div>
  </div>
)

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Modal;