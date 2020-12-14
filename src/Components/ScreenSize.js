import React from 'react';

function ScreenSize() {
  return (
    <>
      <div className="screen-size-select">is</div>
      <select name="search-field" className="search-select">
        <option>between</option>
      </select>
      <input placeholder="0"></input>
      <div className="screen-size-select">and</div>
      <input placeholder="0"></input>
    </>
  )
}

export default ScreenSize;
