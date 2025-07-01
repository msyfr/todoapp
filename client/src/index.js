import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './common/Store/store';


// Hello! This is the React Frontend for the Todo List App.
// I have integrated Tailwind CSS for better styling.
// I included an extra Dockerfile.prod for production environment. 
// React app should usally run behind an http server like nginx as the dev server (the one you are running now) 
// is not meant for production.

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
); 