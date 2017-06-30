export default {
    name: 'BrowserProgress',
    computed: {
        progress() {
            return this.$browserProgress.progress;
        },
    },
    render(h) {
        let opacity = 1;
        if (this.progress <= 0 || this.progress >= 100) {
            opacity = 0;
        }
        return h('div', {
            style: {
                transform: 'translateX(' + (-100 + this.progress) + '%)',
                opacity: opacity,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                'background-color': '#2eb450',
                transition: 'all 0.2s',
            },
            attrs: {
                id: 'browser-progress',
            },
        });
    },
};