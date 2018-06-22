import React            from 'react';
import { render }       from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppRouter        from './AppRouter.jsx';

render(
	<AppContainer>
        <AppRouter/>
    </AppContainer>,
    document.querySelector("#app"));

if (module.hot) {
	module.hot.accept('./AppRouter.jsx', () => {
		const AppRouter = require('./AppRouter.jsx').default;

		render(
			<AppContainer>
    			<AppRouter/>
    		</AppContainer>,
            document.querySelector("#app")
        );
	});
}