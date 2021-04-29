import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase';

// const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
 // Initialize Firebase
 firebase.initializeApp({
  apiKey: "AIzaSyDjqQe59ow_PlGyeI9DxsLqhiGupPqfmiQ",
  authDomain: "mynotes-ee529.firebaseapp.com",
  projectId: "mynotes-ee529",
  storageBucket: "mynotes-ee529.appspot.com",
  messagingSenderId: "525178668095",
  appId: "1:525178668095:web:5999b735b9625b1fec648a"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
