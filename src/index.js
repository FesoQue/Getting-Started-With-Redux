import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// counter-app store
// import { store } from './counter-app/store';

// rtk-counter-app
import { store } from './rtk-counter-app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
