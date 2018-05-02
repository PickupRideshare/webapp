import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const mainApp = () => (
	
	); 

import Homepage from './components/hompage.jsx';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Homepage} />
	</Router>
), document.getElementById('app'));