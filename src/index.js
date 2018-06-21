import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/MediaQueries.css'
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router path="/home">
    <App />
    </Router>,document.getElementById('root'));
