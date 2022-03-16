import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import API01 from './hooks/api01';
import API02 from './hooks/api02';
import API03 from './hooks/api03';
import API04 from './hooks/api04';
import API05 from './hooks/api05';
import API06 from './hooks/api06';

ReactDOM.render(
    <Router>
        <div>
            <Route render ={()=> < App />} path="/" />
            <Route render ={()=> < API01 />} path="/hooks/api01" />
            <Route render ={()=> < API02 />} path="/hooks/api02" />
            <Route render ={()=> < API03 />} path="/hooks/api03" />
            <Route render ={()=> < API04 />} path="/hooks/api04" />
            <Route render ={()=> < API05 />} path="/hooks/api05" />
            <Route render ={()=> < API06 />} path="/hooks/api06" />
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
