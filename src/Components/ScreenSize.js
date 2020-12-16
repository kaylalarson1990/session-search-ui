import React from 'react';

export default class ScreenSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: '',
      secondValue: ''
    }
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ [e.target.name]: value });
  }

  render() {
    const { firstValue, secondValue } = this.state;
    return (
      <>
        <div className="screen-size-select">is</div>
        <select name="search-field" className="search-select">
          <option>between</option>
        </select>
        <input placeholder="0" name="firstValue" value={firstValue} onChange={this.handleChange}></input>
        <div className="screen-size-select">and</div>
        <input placeholder="0" name="secondValue" value={secondValue} onChange={this.handleChange}></input>
      </>
    )
  }
}
