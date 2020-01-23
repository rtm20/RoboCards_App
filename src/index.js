 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './Containers/App';
// (( ./ syntax means the file css is in the same folder))
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
