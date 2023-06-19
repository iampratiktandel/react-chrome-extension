import React from 'react';
import ReactDOM from 'react-dom/client';

const test = <p>Hello World!</p>;

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(test); 
