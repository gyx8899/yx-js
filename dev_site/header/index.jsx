import React from 'react';
import {Link} from 'react-router-dom';
import {Author, Site} from '../config/index';

import Logo from '../assets/images/logo.svg';
import Profile from '../assets/images/profile.jpg';
import './index.scss';

const Header = () => (
		<header className="site_container header">
			<Link to="/">
				<h1>
					<img className="img-logo" src={Logo} alt="NPM logo"/>
					<span className="title">{Site.name}</span>
				</h1>
			</Link>
			<div>
				<div>
					<a target="_blank" rel="noopener noreferrer" href={Author.github} title={Author.name}>
						<img className="img-profile" src={Profile} alt="author"/>
					</a>
				</div>
			</div>
		</header>
);
export default Header;
