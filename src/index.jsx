import React                                   from 'react';
import {render}                                from 'react-dom';
import {AppContainer}                          from 'react-hot-loader';
// import { Router, Route, Link, browserHistory } from 'react-router'
import AppRouter                               from './app.jsx';

render(
	<AppContainer>
        <AppRouter/>
    </AppContainer>,
    document.querySelector("#app"));

if (module.hot) {
	module.hot.accept('./app.jsx', () => {
		const AppRouter = require('./app.jsx').default;

		render(
			<AppContainer>
    			<AppRouter/>
    		</AppContainer>,
            document.querySelector("#app")
        );
	});
}