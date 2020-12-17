import React from 'react';
import ScreenSize from './ScreenSize';
import exit from '../assets/exit.svg';
import '../styles/searchfields.css';
import {firstField, secondField, renderSwitch} from '../helpers/constants';

export default class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      firstValue: '',
      secondValue: ''
    }
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ [e.target.name]: value });
  }

  render() {
    const { removeItem, index } = this.props;
    const { firstSearchField, secondSearchField, input } = this.state;

    return (
      <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={() => removeItem(index)} />
        <select name="firstSearchField" value={firstSearchField} onChange={this.handleChange} className="search-select">
          { firstField.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        {firstSearchField === "Screen Width" || firstSearchField === "Screen Height" ? (
          <ScreenSize handleChange={this.handleChange} />
        ) : (
          <>
            <select name="secondSearchField" value={secondSearchField} onChange={this.handleChange} className="search-select">
              { secondField.map(field => {
                return <option key={field} value={field}>{field}</option>
              })}
            </select>
            <input placeholder={renderSwitch(firstSearchField)} name="input" value={input} onChange={this.handleChange}></input>
          </>
        )}
      </div>
    )
  }
}
