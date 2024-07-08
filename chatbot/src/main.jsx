import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvider from './Context/ThemeContext';
import ContextProvider from './Context/Context.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
