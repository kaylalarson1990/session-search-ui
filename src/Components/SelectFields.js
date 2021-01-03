import React from 'react';
import {selectType, selectContainer} from '../helpers/constants';
import exit from '../assets/exit.svg';

export default class SelectFields extends React.Component {
    render() {
    const {handleChange, removeItem, input} = this.props;

    return (
      <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={removeItem} />
        <select name="selectType" onChange={handleChange} className="search-select">
          {selectType.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        <select name="selectContainer" onChange={handleChange} className="search-select">
          {selectContainer.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
          <input className="handle-input" name="input" value={input} onChange={handleChange} />
      </div>
    )
  }
}
