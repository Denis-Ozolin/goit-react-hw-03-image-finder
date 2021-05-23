import { Component } from "react";

class Searchbar extends Component {

  state = {
    inputValue: ''
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.currentTarget.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.resetState();
  }

  resetState = () => {
    this.setState({ inputValue: '' });
  }

  render() {
    return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
      </form>
    </header>
  )
  }
}

export default Searchbar;