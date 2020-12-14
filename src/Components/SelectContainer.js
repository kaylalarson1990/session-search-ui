import React from 'react';
import ScreenSize from './ScreenSize';
import exit from '../assets/exit.svg';
import '../styles/searchfields.css';
import {firstField, secondField, renderSwitch} from '../helpers/constants';

export default class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: ""
    }
  }

  handleChange = (e) => {
    this.setState({ field: e.target.value });
  }

  render() {
    const { removeItem, index } = this.props;
    const { field } = this.state;

    return (
      <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={() => removeItem(index)} />
        <select name="search-field" value={this.state.field} onChange={this.handleChange} className="search-select">
          { firstField.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        {field === "Screen Width" || field === "Screen Height" ? (
          <ScreenSize />
        ) : (
          <>
            <select name="search-field" className="search-select">
              { secondField.map(field => {
                return <option key={field} value={field}>{field}</option>
              })}
            </select>
            <input placeholder={renderSwitch(field)}></input>
          </>
        )}
      </div>
    )
  }
}
