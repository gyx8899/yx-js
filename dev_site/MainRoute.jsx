import React from 'react';
import {Route, Switch} from 'react-router-dom';

export const routes = [
	{
		path: '/',
		exact: true,
		name: 'Readme',
		component: React.lazy(() => import('../dev_site/pages/readme')),
	},
	{
		path: '/changelog',
		exact: true,
		name: 'Change log',
		component: React.lazy(() => import('../dev_site/pages/changelog')),
	},
	{
		path: '/samples',
		exact: true,
		name: 'Samples',
		component: React.lazy(() => import('../dev_site/pages/samples')),
	},
];

const MainRoute = () => (
		<Switch>
			{routes.map((route) => (
					<Route
							key={route.name} exact={!!route.exact} path={route.path}
							render={() => <route.component />} />
			))}
		</Switch>
);

export default MainRoute;
