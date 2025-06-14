import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Make sure this path is correct as per your folder structure
import App from './App'; // This imports your main App component


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);

