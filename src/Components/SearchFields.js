import React, {useEffect, useState} from 'react';
import '../styles/searchfields.css';
import search from '../assets/search.svg';
import SelectContainer from './SelectContainer';

function SearchFields() {
  const [field, setField] = useState([0]);
  let fieldId = 0;
  useEffect(() => {});

  const addField = (e) => {
    fieldId++
    setField([...field, field.length]);
  }

  const removeField = (index) => {
    let copy = [...field]
    if (field.length > 1) {
      copy.splice(index, 1);
      setField(copy);
    }
  }

  const restart = (e) => {
    setField([0])
  }

    return (
      <div className="search-container">
        <div className="search-field">
          <h1 className="search-header">Search for Sessions</h1>
          {field.map((id, i) => <SelectContainer key={id} id={id} index={i} removeItem={removeField} />)}
          <button className="active-btn and" id="and-btn" onClick={(e) => addField(e)}>And</button>
          <div className="hr"></div>
          <div>
            <button className="active-btn"><img src={search} />Search</button>
            <button className="reset-btn" onClick={restart}>Reset</button>
          </div>
          <div className="sql-statement">Your Generated SQL Statement goes here:</div>
        </div>
      </div>
    )
}

export default SearchFields;
