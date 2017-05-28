import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from './components/DataMaven';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Router>
        <DataMaven />
    </Router>,
    document.getElementById('root')
);
