import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers';
import AppContainer from './src/routes';

const ConnectedApp = connect(null, null)(AppContainer);

export default function App() {
	return (
		<Provider store={createStore(reducers, applyMiddleware(thunk))}>
			<ConnectedApp />
		</Provider>
	);
}