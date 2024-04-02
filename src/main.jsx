import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/fonts.css';
import './styles/reset.css';
import { ModalProvider } from './context/index.js';

// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={}>
      <PersistGate loading={null}> */}
    <BrowserRouter basename="/Smart-Foxes-WaterTracker/">
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
    {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
