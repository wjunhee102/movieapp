import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import movieStore from "./store";

ReactDOM.render(
  <Provider store={movieStore}>
    <App />
  </Provider>, document.getElementById('root'));
