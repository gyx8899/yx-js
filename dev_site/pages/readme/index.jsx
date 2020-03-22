import Markdown from '../../libs/markdown';

export default class App extends Markdown {
	document() {
		return require('../../docs/readme.md');
	}
}
