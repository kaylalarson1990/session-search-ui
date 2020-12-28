import React from 'react';
import ScreenSize from './ScreenSize';
import '../styles/searchfields.css';
import {connect} from 'react-redux';
import SelectFields from './SelectFields';
import {setValues} from '../actions';
import _ from 'lodash';

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

  changeView = (e) => {
    const {
      removeItem,
      index,
      input,
      values
    } = this.props;
    const setValHeight = values.map(field => field.firstSearchField).filter(val => val === "Screen Height");
    const setValWidth = values.map(field => field.firstSearchField).filter(val => val === "Screen Width");

    if (_.uniq(setValHeight).join() === "Screen Height" || _.uniq(setValWidth).join() === "Screen Width") {
      return <ScreenSize removeItem={removeItem} handleChange={this.handleChange} input={input} />
    } else {
      return <SelectFields removeItem={removeItem} handleChange={this.handleChange} index={index} input={input} />
    }
  }

  render() {
    return (
      this.changeView()
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
