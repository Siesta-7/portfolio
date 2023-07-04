import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { MenuContextProvider } from './Context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </React.StrictMode>
);


