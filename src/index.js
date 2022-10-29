import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/sass/css/main.css"
import "./assets/sass/css/mediaQuery.css"
import "../src/js/main"

import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>
);
