import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from './utils/db';

export const Context = createContext<any>(null);

const auth = getAuth(app);
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{auth, firestore}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
