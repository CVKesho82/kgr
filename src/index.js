import React from 'react';
import ReactDOM from 'react-dom/client';
import TagManager from 'react-gtm-module';
import {HashRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
const customHistory = createBrowserHistory();
const tagManagerArgs = {
    gtmID:'GTM-Z8DFQ008SZ'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode basename={process.env.PUBLIC_URL} history={customHistory}>
<App />
</React.StrictMode>

);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
