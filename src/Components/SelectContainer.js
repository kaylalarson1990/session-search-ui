import React from 'react';
import ScreenSize from './ScreenSize';
import exit from '../assets/exit.svg';
import '../styles/searchfields.css';
import {connect} from 'react-redux';
import {firstField, secondField, renderSwitch} from '../helpers/constants';
import {setValues} from '../actions';

class SelectContainer extends React.Component {
  handleChange = (e) => {
    const { setValues, values } = this.props;
    setValues([...values, {[e.target.name]: e.target.value}])
  }

  render() {
    const { removeItem, index, input, firstSearchField, secondSearchField } = this.props;
    return (
      <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={() => removeItem(index)} />
        <select name="firstSearchField" value={firstSearchField} onChange={this.handleChange} className="search-select">
          { firstField.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        {firstSearchField === ["Screen Width"] || firstSearchField === ["Screen Height"] ? (
          <ScreenSize handleChange={this.handleChange} />
        ) : (
          <>
            <select name="secondSearchField" value={secondSearchField} onChange={this.handleChange} className="search-select">
              { secondField.map(field => {
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
  setValues: (val1, val2, val3) => dispatch(setValues(val1, val2, val3))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
