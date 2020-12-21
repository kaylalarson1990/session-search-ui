import React from 'react';
import ScreenSize from './ScreenSize';
import exit from '../assets/exit.svg';
import '../styles/searchfields.css';
import {connect} from 'react-redux';
import {firstField, secondField, renderSwitch} from '../helpers/constants';
import {setValues} from '../actions';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }

  handleChange = (e) => {
    const {setValues, values} = this.props;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      setValues([...values, {[e.target.name]: e.target.value}])
    }, 500);
  }

  render() {
    const {
      removeItem,
      index,
      input,
      firstSearchField,
      secondSearchField,
      values
    } = this.props;
    const firstValue = values.map(val => val.firstSearchField);
    const filterValue = firstValue.filter(n => {
      if (n === "Screen Width" || n === "Screen Height") {
        return n;
      }
    });

    return (
      <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={() => removeItem(index)} />
        <select name="firstSearchField" value={firstSearchField} onChange={this.handleChange} className="search-select">
          {firstField.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        {filterValue.join() === "Screen Width" || filterValue.join() === "Screen Height" ? (
          <ScreenSize handleChange={this.handleChange} />
        ) : (
          <>
            <select name="secondSearchField" value={secondSearchField} onChange={this.handleChange} className="search-select">
              {secondField.map(field => {
                return <option key={field} value={field}>{field}</option>
              })}
            </select>
            <input className="handle-input" placeholder={renderSwitch(firstSearchField)} name="input" value={input} onChange={this.handleChange}></input>
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  values: state.values
})

const mapDispatchToProps = (dispatch) => ({
  setValues: (val) => dispatch(setValues(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
