import React from 'react';
import './searchfields.css';
import search from './assets/search.svg';
import exit from './assets/exit.svg';
import downarrow from './assets/downarrow.svg';

export default class SearchFields extends React.Component {

  render() {
    return (
      <div className="search-container">
        <div className="search-field">
          <h1 className="search-header">Search for Sessions</h1>
          <div className="search-input">
            <img src={exit} className="exit" />
            <select name="search-field">
              <option value="sergio">Sergio</option>
            </select>
            <select name="search-field">
              <option value="equals">equals</option>
              <option value="contains">contains</option>
              <option value="starts-with">starts with</option>
              <option value="in-list">in list</option>
            </select>
            <input placeholder="website.com"></input>
          </div>
          <button className="active-btn and">And</button>
          <div className="hr"></div>
          <div>
            <button className="active-btn"><img src={search} />Search</button>
            <button className="reset-btn">Reset</button>
          </div>
          <div className="sql-statement">Your Generated SQL Statement goes here:</div>
        </div>
      </div>
    )
  }
}
