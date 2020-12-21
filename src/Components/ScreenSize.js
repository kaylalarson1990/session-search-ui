import React from 'react';

function ScreenSize(props) {
  const {handleChange} = props;

  return (
    <>
      <div className="screen-size-select">is</div>
      <select name="search-field" className="search-select">
        <option>between</option>
      </select>
      <input placeholder="0" name="firstValue" onChange={handleChange}></input>
      <div className="screen-size-select">and</div>
      <input placeholder="0" name="secondValue" onChange={handleChange}></input>
    </>
  )
}

export default ScreenSize;
