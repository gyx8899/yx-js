import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import {routes} from '../../pages';

const renderRoutesList = () => useMemo(() => routes.map((route, i) => (
		<li className="nav-item" key={`${route.name}_${i.toString()}`}>
			<Link to={route.path}>{route.name}</Link>
		</li>
)), [routes]);

const SideBar = () => (
		<nav className="side-nav">
			<ul>
				{renderRoutesList()}
			</ul>
		</nav>
);
export default SideBar;
