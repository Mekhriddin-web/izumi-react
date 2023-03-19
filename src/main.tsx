import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='wrapper' id='wrapper'>
      <Header />
      <App />
    </div>
  </React.StrictMode>
);
