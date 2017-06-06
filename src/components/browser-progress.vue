<template>
    <transition name="fade">
        <div v-show="progress != 0 && progress != 100" id="browser-progress" :style="{transform: 'translateX(' + (-100 + progress) + '%)'}"></div>
    </transition>
</template>

<script>
    export default {
        name: 'BrowserProgress',
        computed: {
            progress() {
                return this.$browserProgress.progress;
            },
        },
    };
</script>

<style scoped>
    #browser-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #2eb450;
        transition: all 0.1s;
    }
</style>