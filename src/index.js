import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const notes =[
  {
    id : 1, 
    content: 'html is easy',
    important: true
  },
  {
    id:2,
    content: 'browser can excute only javascript',
    important : false
  },
  {
    id:3,
    content: 'Get and Post are the most important methodes if http protocols',
    important: true
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

