import React from 'react';
import {Link} from 'react-router-dom';
import {Author, Npm, Github} from '../../../site/data';

import Logo from '../../assets/images/logo.svg';
import Profile from '../../assets/images/profile.jpg';
import './index.scss';

const Header = () => (
		<header className="site_container header">
			<h1>
				<a title={Npm.name} href={Npm.href} target="_blank"><img className="img-logo" src={Logo} alt="NPM logo"/></a>
			</h1>
			<h1>
				<a className="title" title={Github.name} href={Github.href} target="_blank">{Github.name}</a>
			</h1>
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
