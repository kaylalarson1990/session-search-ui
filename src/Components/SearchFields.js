import React from 'react';
import '../styles/searchfields.css';
import search from '../assets/search.svg';
import SelectContainer from './SelectContainer';
import $ from 'jquery';
import { connect } from 'react-redux';

class SearchFields extends React.Component {

querySwitch = (param) => {
  const firstValues = this.props.values.map(val => val.firstSearchField).join();
  // const secondValues = this.props.values.map(val => val.secondSearchField).join(', ');
  const thirdValues = this.props.values.map(val => val.input);
  switch(param)  {
    case "equals":
      return $(`<p>SELECT ${firstValues} FROM session WHERE ${thirdValues};</p>`).appendTo(".sql-statement");
    case "contains":
      return $(`<p>SELECT ${firstValues} FROM session WHERE CONTAINS(${thirdValues}, 'string');</p>`).appendTo(".sql-statement");
    case `starts with`:
      return $(`<p>SELECT ${firstValues} FROM session WHERE ${thirdValues} LIKE __;</p>`).appendTo(".sql-statement");
    case `in list`:
      return $(`<p>SELECT ${firstValues} FROM session WHERE ${thirdValues} IN __;</p>`).appendTo(".sql-statement");
    case `between`:
      return $(`<p>SELECT ${firstValues} FROM session WHERE ${thirdValues} BETWEEN __ AND __;</p>`).appendTo(".sql-statement");
    default:
      return "Your Generated SQL Statement goes here:"
  }
}

render() {
  const { field, removeItem, restart, addItem, values } = this.props;
  const firstValues = values.map(val => val.firstSearchField).join('');
  const secondValues = values.map(val => val.secondSearchField).join('');
  console.log(firstValues)
  console.log(secondValues)


    return (
      <div className="search-container">
        <div className="search-field">
          <h1 className="search-header">Search for Sessions</h1>
          {field.map((id, i) => {
            return <SelectContainer
              key={id}
              id={id}
              index={i}
              removeItem={removeItem}
            />
          })}
          <button className="active-btn and" id="and-btn" onClick={(e) => addItem(e)}>And</button>
          <div className="hr"></div>
          <div>
            <button className="active-btn" onClick={() => this.querySwitch(secondValues)}><img src={search} />Search</button>
            <button className="reset-btn" onClick={restart}>Reset</button>
          </div>
          <div className="sql-statement">Your Generated SQL Statement goes here:</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  values: state.values
})

export default connect(mapStateToProps)(SearchFields);
