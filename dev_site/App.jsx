import React, {Suspense, useMemo} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import Header from './header';
import MainRoute, {routes} from './MainRoute';

const App = () => {
	const renderComponentsList = () => useMemo(() => routes.map((route, i) => (
			<li className="nav-item" key={`${route.name}_${i.toString()}`}>
				<Link to={route.path}>{route.name}</Link>
			</li>
	)), [routes]);

	return (
			<div className="app">
				<BrowserRouter>
					<Header />
					<div className="main container">
						<nav className="side-nav">
							<ul>
								{renderComponentsList()}
							</ul>
						</nav>
						<div className="content">
							<Suspense fallback={<div>loading...</div>}>
								<MainRoute />
							</Suspense>
						</div>
					</div>
				</BrowserRouter>
			</div>
	);
};


export default hot(App);
