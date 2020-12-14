import React from 'react';
import '../styles/searchfields.css';
import search from '../assets/search.svg';
import exit from '../assets/exit.svg';
import {firstField, secondField} from '../helpers/constants';
import $ from "jquery";

export default class SearchFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    $('#and-btn').on('click', function(e) {
      console.log('am i clicking')
      $('#search-select-container').clone().appendTo('#search-select-row2');
      return true;
    })
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-field">
          <h1 className="search-header">Search for Sessions</h1>
          <div className="search-input" id="search-select-container">
            <img src={exit} className="exit" />
            <select name="search-field" className="search-select">
              { firstField.map(field => {
                return <option value={field.value}>{field.title}</option>
              })}
            </select>
            <select name="search-field" className="search-select">
              { secondField.map(field => {
                return <option value={field.value}>{field.title}</option>
              })}
            </select>
            <input placeholder="website.com"></input>
          </div>
          <div id="#search-select-row2"></div>
          <button className="active-btn and" id="and-btn">And</button>
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
