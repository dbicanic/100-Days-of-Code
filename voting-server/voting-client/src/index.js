import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
	<Voting pair={pair} />,
	document.getElementById('root')
);
registerServiceWorker();
