import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-right" reverseOrder={true} />
    </Provider>
  </React.StrictMode>
);
