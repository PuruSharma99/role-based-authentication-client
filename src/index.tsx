import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
