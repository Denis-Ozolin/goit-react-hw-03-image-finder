const Button = ({ btnName, onClick }) => (
  <button type='text' className="Button" onClick={onClick}>{btnName}</button>
)

export default Button;