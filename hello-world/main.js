import React from 'react'; // React Core library
import ReactDOM from 'react-dom'; // React library for manuplating DOM.
import App from './App.jsx'; // React Component

// ReactDOM.render - This will render an React compoent into another HTML element
// First argument - React Component
// Second argument - Element where React component needs to be rendered.
ReactDOM.render(<App />, document.getElementById('app'));
