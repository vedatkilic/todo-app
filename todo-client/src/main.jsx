import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import Router from "./router/Router";

import { store } from "./store.js";

import './index.css'
import {AuthProvider, LocalStorageProvider} from "@reactivers/hooks";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LocalStorageProvider>
          <AuthProvider>
              <Provider store={store}>
                  <Router />
              </Provider>
          </AuthProvider>
      </LocalStorageProvider>
  </React.StrictMode>,
)
