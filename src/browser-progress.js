import {
	install,
} from './install.js';

export class BrowserProgress {

	constructor() {
		this.app = null;
		this.progress = 0; // 默认为0
	}
	/**
	 * 初始化所需要调用的函数
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