import React            from 'react';
import {render}         from 'react-dom';
import {AppContainer}   from 'react-hot-loader';
import App              from './app.jsx';
import AOS              from 'aos'

AOS.init()

render(
	<AppContainer>
        <App/>
    </AppContainer>,
    document.querySelector("#app"));

if (module.hot) {
	module.hot.accept('./app.jsx', () => {
		const App = require('./app.jsx').default;
		render(
			<AppContainer>
    			<App/>
    		</AppContainer>, document.querySelector("#app")
        );
	});
}
