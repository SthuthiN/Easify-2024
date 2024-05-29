import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { App } from './Components/App/App';
import './index.css';

import { AzureAD } from 'react-aad-msal';
import { authProvider } from './Components/App/Auth/AuthConfig';


ReactDOM.render(
    <AzureAD provider={authProvider} forceLogin={true}>
        <App />
    </AzureAD>,
    document.getElementById('root')
);