import React from 'react';
import {selectType, selectContainer} from '../helpers/constants';
import exit from '../assets/exit.svg';

function SelectFields(props) {
  const {handleChange, removeItem, index, input} = props;
  console.log(props)

  return (
    <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={() => removeItem(index)} />
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

export default SelectFields;
