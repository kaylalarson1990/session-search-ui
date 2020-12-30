import React from 'react';
import './styles/index.css';
import SearchFields from './Components/SearchFields';
import {createStore} from 'redux';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <SearchFields />
  </Provider>, document.getElementById('root')
)
