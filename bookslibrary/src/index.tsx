import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookAPI from './components/API/BookAPI';


const runApp = async () => {
  BookAPI.init();
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

runApp()

reportWebVitals();
