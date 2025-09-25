import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';
export const myContext=createContext()
const userName="grow Ritik"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
    <myContext.Provider value={userName}>
    <App />
    </myContext.Provider>

);


