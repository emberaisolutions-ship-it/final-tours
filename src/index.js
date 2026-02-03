import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; // Changed from BrowserRouter to HashRouter


import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> {/* Changed from BrowserRouter to HashRouter */}
     
        <App />
     
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();