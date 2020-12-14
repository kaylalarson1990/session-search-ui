import React from 'react';
import '../styles/searchfields.css';
import {querySwitch} from '../helpers/constants';

export default class Query extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  render() {
    const { query } = this.state;

    return(
      querySwitch(query)
    )
  }
}