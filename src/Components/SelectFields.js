import React from 'react';
import {selectType, selectContainer} from '../helpers/constants';
import exit from '../assets/exit.svg';

export default class SelectFields extends React.Component {
    constructor(params) {
      super(params);
      this.displayData = [];
      this.state = {
        showData: this.displayData
      }

    }

    render() {
    const {handleChange, removeItem, index, input, values} = this.props;
    console.log(this.props)


    return (
      <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={removeItem} />
        <select name="firstSearchField" onChange={handleChange} className="search-select">
          {selectType.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        <select name="secondSearchField" onChange={handleChange} className="search-select">
          {selectContainer.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
          <input className="handle-input" name="input" value={input} onChange={handleChange} />
      </div>
    )
  }
}
