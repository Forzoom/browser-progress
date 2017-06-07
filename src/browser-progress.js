import {
	install,
	_Vue,
} from './install.js';

export default class BrowserProgress {

	constructor() {
		this.app = null;
		this._progress = 0; // 默认为0
		_Vue.util.defineReactive(this, 'progress', this._progress);
	}
	/**
	 * 初始化所需要调用的函数，貌似并非必须
	 */
	init(app) {
		if (this.app) {
			return;
		}
		this.app = app;
	}
	/**
	 * 开始加载
	 */
	set(progress) {
		this.progress = progress;
	}
}

BrowserProgress.install = install;