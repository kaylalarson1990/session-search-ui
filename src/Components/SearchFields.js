import React from 'react';
import '../styles/searchfields.css';
import search from '../assets/search.svg';
import SelectContainer from './SelectContainer';
import {querySwitch} from '../helpers/constants';
import { connect } from 'react-redux';

class SearchFields extends React.Component {

render() {
  const { field, removeItem, restart, addItem } = this.props;
  console.log('insearchfield', this.props)

    return (
      <div className="search-container">
        <div className="search-field">
          <h1 className="search-header">Search for Sessions</h1>
          {field.map((id, i) => <SelectContainer key={id} id={id} index={i} removeItem={removeItem} />)}
          <button className="active-btn and" id="and-btn" onClick={(e) => addItem(e)}>And</button>
          <div className="hr"></div>
          <div>
            <button className="active-btn"><img src={search} />Search</button>
            <button className="reset-btn" onClick={restart}>Reset</button>
          </div>
          <div className="sql-statement">{querySwitch()}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  values: state.values
})

export default connect(mapStateToProps)(SearchFields);
