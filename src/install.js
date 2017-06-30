import BrowserProgress from './components/browser-progress.js';

export let _Vue;

export function install(Vue) {
	if (install.installed) {
		return;
	}
	install.installed = true;

	_Vue = Vue;

	// 为所有的Vue组件提供$browserProgress对象
	Object.defineProperty(Vue.prototype, '$browserProgress', {
		get() {
			return this.$root._browserProgress;
		},
	});

	// 注入browserProgress
	Vue.mixin({
		beforeCreate() {
			// 当前是所谓的$root对象
			if (this.$options.browserProgress) {
				this._browserProgress = this.$options.browserProgress;
				this._browserProgress.init(this);
			}
		},
	});

	// 注入组件
	Vue.component('browser-progress', BrowserProgress);
}