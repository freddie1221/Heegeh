import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// So this file uses a render method on the ReactDOM (object?), passing in two arguments
// The component to render, and the element on the DOM to render it on

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
