import React from 'react';
import exit from '../assets/exit.svg';
import {selectType, selectIntContainer} from '../helpers/constants';

function ScreenSize(props) {
  const {handleChange, removeItem} = props;

  return (
    <div className="search-input" id="search-select-container">
      <img src={exit} className="exit" onClick={removeItem} />
      <select name="selectType" onChange={handleChange} className="search-select">
        {selectType.map(field => {
          return <option className="options" key={field} value={field}>{field}</option>
        })}
      </select>
      <div className="screen-size-select">is</div>
      <select name="selectIntContainer" onChange={handleChange} className="search-select">
        {selectIntContainer.map(field => {
          return <option key={field} value={field}>{field}</option>
        })}
      </select>
      <input placeholder="0" name="firstValue" onChange={handleChange}></input>
      <div className="screen-size-select">and</div>
      <input placeholder="0" name="secondValue" onChange={handleChange}></input>
    </div>
  )
}

export default ScreenSize;
