import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import Header from './components/Header';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='wrapper' id='wrapper'>
      <Provider store={store}>
        <Header />
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);
