import React from 'react';
import SelectFields from './SelectFields';
import {setValues} from '../actions';
import '../styles/searchfields.css';
import search from '../assets/search.svg';
import {connect} from 'react-redux';

class SearchFields extends React.Component {
  constructor(params) {
    super(params);
    this.displayData = [];
    this.timeout = 0;
    this.itemId = 0;

    this.state = {
      showData: this.displayData
    }
  }

  handleChange = (e) => {
    const {setValues, values} = this.props;
    this.itemId++;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      setValues([...values, {[e.target.name]: e.target.value, id: this.itemId}])
    }, 500);
  }

  restart = (e) => {
    window.location.reload();
  }

  removeData = (index) => {
    let {showData} = this.state;
    if(showData.length >=1) {
      showData.splice(index, 1);
      this.setState({
        showData: showData
      })
    } else {
      window.location.reload();
    }
  }

  appendData = () => {
    const {values} = this.props;
    this.displayData.push(
      <SelectFields
        handleChange={this.handleChange}
        removeItem={this.removeData}
        values={values}
      />
    )

    this.setState({
      showData: this.displayData
    });
  }

  querySwitch = (param) => {
    const {values} = this.props;
    const firstValues = values.map(val => val.selectType).filter(n => n).join(', ');
    const secondValues = values.map(val => val.selectContainer).filter(n => n).join(', ');
    const thirdValues = values.map(val => val.input).filter(n => n).join(', ');
    let el = document.createElement('p')
    let obj = document.getElementById('sql')

    switch(param)  {
      case "equals":
        el.innerHTML = `<p>SELECT ${firstValues} FROM session WHERE ${thirdValues};</p>`;
        return obj.appendChild(el);
      case "contains":
        el.innerHTML = `<p>SELECT ${firstValues} FROM session WHERE CONTAINS(${thirdValues}, 'string');</p>`;
        return obj.appendChild(el);
      case "starts with":
        el.innerHTML = `<p>SELECT ${firstValues} FROM session WHERE ${thirdValues} LIKE ${thirdValues}%;</p>`;
        return obj.appendChild(el);
      case "in list":
        el.innerHTML = `<p>SELECT ${firstValues} FROM session WHERE ${thirdValues} IN ${thirdValues};</p>`;
        return obj.appendChild(el);
      case "between":
        el.innerHTML = `<p>SELECT ${firstValues} FROM session WHERE ${thirdValues} BETWEEN __ AND __;</p>`;
        return obj.appendChild(el);
      case `${secondValues}`:
        el.innerHTML = `<p>SELECT ${firstValues} FROM session WHERE ${thirdValues};</p>`;
        return obj.appendChild(el);
      default:
        return "Your Generated SQL Statement goes here:"
    }
  }

  render() {
    const {values} = this.props;
    const secondValues = values.map(val => val.selectContainer).filter(n => n).join(', ');

    return (
      <div className="search-container">
        <div className="search-field">
          <h1 className="search-header">Search for Sessions</h1>
          <SelectFields
            handleChange={this.handleChange}
            removeItem={this.removeData}
            values={values}
          />
          <div>
            {this.displayData}
          </div>
          <button className="active-btn and" id="and-btn" onClick={this.appendData}>And</button>
          <div className="hr"></div>
          <div>
            <button className="active-btn" onClick={() => this.querySwitch(secondValues)}><img src={search} />Search</button>
            <button className="reset-btn" onClick={this.restart}>Reset</button>
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

const mapDispatchToProps = (dispatch) => ({
  setValues: (val) => dispatch(setValues(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFields);
