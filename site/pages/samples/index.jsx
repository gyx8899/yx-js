// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import * as YX from '../../../src/index';

function Samples() {
	console.log(YX);
	return (
			<div className="Sample">
				<ul>
					<li><a href="/site/pages/html/ClassName.html">ClassName</a></li>
					<li><a href="/site/pages/html/Event.html">Event</a></li>
					<li><a href="/site/pages/html/mouseTouchTrack.html">mouseTouchTrack</a></li>
					<li><a href="/site/pages/html/MVVM.html">MVVM</a></li>
					<li><a href="/site/pages/html/ObserverObject.html">ObserverObject</a></li>
					<li><a href="/site/pages/html/util.html">util</a></li>
				</ul>
			</div>
	);
}

export default Samples;
