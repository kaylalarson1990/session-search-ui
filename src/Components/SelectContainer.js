import React from 'react';
import ScreenSize from './ScreenSize';
import exit from '../assets/exit.svg';
import '../styles/searchfields.css';
import {connect} from 'react-redux';
import {selectType, selectContainer} from '../helpers/constants';
import {setValues} from '../actions';
import _ from 'lodash';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
    this.state = {
      view: ''
    }
  }

  view = (
    `<>
      <div className="screen-size-select">is</div>
      <select name="search-field" className="search-select">
        <option>between</option>
      </select>
      <input placeholder="0" name="firstValue" onChange={${this.handleChange}}></input>
      <div className="screen-size-select">and</div>
      <input placeholder="0" name="secondValue" onChange={${this.handleChange}}></input>
    </>`
  )

  handleChange = (e) => {
    const {setValues, values} = this.props;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if(e.target.value === "Screen Height" || e.target.value === "Screen Width") {
        setValues([...values, {screenSize: e.target.value}])
      } else {
        setValues([...values, {[e.target.name]: e.target.value}])
      }
    }, 500);
  }

  changeView = (e) => {
    // console.log('hmmmmm', e.target)
    this.setState({view: this.view})
    console.log(this.state)
  }


  render() {
    const {
      removeItem,
      index,
      input,
      values
    } = this.props;

    let firstVal = _.every(values, 'screenSize')
    console.log(values)

    return (
      <div className="search-input" id="search-select-container">
        <img src={exit} className="exit" onClick={() => removeItem(index)} />
        <select name="firstSearchField" onChange={this.handleChange} className="search-select">
          {selectType.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        <select name="secondSearchField" onChange={this.handleChange} className="search-select">
          {selectContainer.map(field => {
            return <option key={field} value={field}>{field}</option>
          })}
        </select>
        <input className="handle-input" name="input" value={input} onChange={this.handleChange}></input>
        {firstVal && (
        <ScreenSize handleChange={this.handleChange} />
        // this.changeView()
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
