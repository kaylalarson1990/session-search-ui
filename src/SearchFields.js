import React from 'react';
import './searchfields.css';
import search from './assets/search.svg';
import exit from './assets/exit.svg';
import $ from "jquery";

export default class SearchFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    $('#and-btn').on('click', function(e) {
      console.log('am i clicking')
      $('#search-select-container').clone().appendTo('#search-select-row2');
      return true;
    })

    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  }

  render() {
    console.log('data', this.state.data)
    return (
      <div className="search-container">
        <div className="search-field">
          <h1 className="search-header">Search for Sessions</h1>
          <div className="search-input" id="search-select-container">
            <img src={exit} className="exit" />
            <select name="search-field" className="search-select">
              <option value="domain">Domain</option>
              <option value="page-respone">Page Response Time</option>
              <option value="path">Page Path</option>
              <option value="screen-height">Screen Height</option>
              <option value="screen-width">Screen Width</option>
              <option value="user-email">User Email</option>
              <option value="user-first-name">First Name</option>
              <option value="user-last-name">Last Name</option>
              <option value="visits"># of Visits</option>
            </select>
            <select name="search-field" className="search-select">
              <option value="equals">equals</option>
              <option value="contains">contains</option>
              <option value="starts-with">starts with</option>
              <option value="in-list">in list</option>
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
