import React , { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApiContextProvider, ApiContext } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </React.StrictMode>
);
