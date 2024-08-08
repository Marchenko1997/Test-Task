import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { ModalProvider } from './context/ModalContext.jsx';
import { Provider } from 'react-redux';
import {store} from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       
    <HelmetProvider>
    <ModalProvider>
    <App />
    </ModalProvider>
    </HelmetProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
