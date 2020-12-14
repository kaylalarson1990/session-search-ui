import React from 'react';
import exit from '../assets/exit.svg';
import '../styles/searchfields.css';
import {firstField, secondField} from '../helpers/constants';

export default class SelectContainer extends React.Component {
  render() {
    const { removeItem, index } = this.props;
    const screenSize = firstField.map(field => {
      if (field === "Screen Width") {
        return (
          <>
            <div>is</div>
            <select name="search-field" className="search-select">
              <option>between</option>
            </select>
            <input placeholder="0"></input>
            <div>and</div>
            <input placeholder="10"></input>
          </>
        )
      }
    });

    return (
      <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={() => removeItem(index)} />
        <select name="search-field" className="search-select">
          { firstField.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        <select name="search-field" className="search-select">
          { secondField.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        <input placeholder="website.com"></input>
      </div>
    )
  }
}
