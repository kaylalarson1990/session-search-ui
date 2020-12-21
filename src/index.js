import React from 'react';
import './styles/index.css';
import App from './Components/App';
import {createStore} from 'redux';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
