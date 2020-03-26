import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SiteRoute from '../../site/pages/index';

export const routes = [
	{
		path: '/',
		exact: true,
		name: 'Readme',
		component: React.lazy(() => import('./readme')),
	},
	{
		path: '/changelog',
		exact: true,
		name: 'Change log',
		component: React.lazy(() => import('./changelog')),
	},
	...SiteRoute
];

const AppRoute = () => (
		<Switch>
			{routes.map((route) => (
					<Route
							key={route.name} exact={!!route.exact} path={route.path}
							render={() => <route.component/>}/>
			))}
		</Switch>
);

export default AppRoute;
