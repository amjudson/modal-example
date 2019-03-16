import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './stores/configStore';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../src/css/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const history = createHistory();
const node1 = document.getElementById('container');

if (node1) {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<App history={history} />
			</Router>
		</Provider>,
		node1
	);
}
