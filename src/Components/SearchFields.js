import React from 'react';
import '../styles/searchfields.css';
import search from '../assets/search.svg';
import SelectContainer from './SelectContainer';
import {connect} from 'react-redux';

class SearchFields extends React.Component {

querySwitch = (param) => {
  const {values} = this.props;
  const firstValues = values.map(val => val.firstSearchField);
  const filterFirstValues = firstValues.filter(n => n).join(', ');
  const secondValues = values.map(val => val.secondSearchField);
  const filterSecondValues = secondValues.filter(n => n).join(', ')
  const thirdValues = values.map(val => val.input);
  const filterThirdValues = thirdValues.filter(n => n).join(', ');

  let el = document.createElement('p')
  let obj = document.getElementById('sql')

  switch(param)  {
    case "equals":
      el.innerHTML = `<p>SELECT ${filterFirstValues} FROM session WHERE ${filterThirdValues};</p>`;
      return obj.appendChild(el);
    case "contains":
      console.log(param)
      el.innerHTML = `<p>SELECT ${filterFirstValues} FROM session WHERE CONTAINS(${filterThirdValues}, 'string');</p>`;
      return obj.appendChild(el);
    case "starts with":
      el.innerHTML = `<p>SELECT ${filterFirstValues} FROM session WHERE ${filterThirdValues} LIKE %${filterThirdValues};</p>`;
      return obj.appendChild(el);
    case "in list":
      el.innerHTML = `<p>SELECT ${filterFirstValues} FROM session WHERE ${filterThirdValues} IN ${filterThirdValues};</p>`;
      return obj.appendChild(el);
    case "between":
      el.innerHTML = `<p>SELECT ${filterFirstValues} FROM session WHERE ${filterThirdValues} BETWEEN __ AND __;</p>`;
      return obj.appendChild(el);
    case `${filterSecondValues}`:
      el.innerHTML = `<p>SELECT ${filterFirstValues} FROM session WHERE ${filterThirdValues};</p>`;
      return obj.appendChild(el);
    default:
      return "Your Generated SQL Statement goes here:"
  }
}

render() {
  const {
    field,
    removeItem,
    restart,
    addItem,
    values
  } = this.props;
  const secondValues = values.map(val => val.secondSearchField);
  const filterSecondValues = secondValues.filter(n => n).join(', ');

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
            <button className="active-btn" onClick={() => this.querySwitch(filterSecondValues)}><img src={search} />Search</button>
            <button className="reset-btn" onClick={restart}>Reset</button>
          </div>
          <div className="sql-statement" id="sql">Your Generated SQL Statement goes here:</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  values: state.values
})

export default connect(mapStateToProps)(SearchFields);
