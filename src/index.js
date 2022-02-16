import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SimpleReactLightbox from 'simple-react-lightbox';
import App from './App';
import Store from './components/cart/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);