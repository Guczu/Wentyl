import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <BrowserRouter>
          <React.StrictMode>
              <div className="index--container">
                 <App />
              </div>
          </React.StrictMode>
        </BrowserRouter>
    </React.Fragment>
);
