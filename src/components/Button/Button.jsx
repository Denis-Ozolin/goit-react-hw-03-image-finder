import PropTypes from 'prop-types';

const Button = ({ btnName, onClick }) => (
  <button type="button" className="Button" onClick={onClick}>{btnName}</button>
)

Button.propTypes = {
  btnName: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button;