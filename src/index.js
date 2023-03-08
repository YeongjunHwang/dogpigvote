import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Footer from './Footer';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <App />
    <Footer />
    </div>
);


reportWebVitals();
