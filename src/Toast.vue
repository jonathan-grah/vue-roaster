<template>
    <div id='toast-container'></div>
</template>

<script>
	import $ from 'jquery';
	import 'jquery-ui';

    /*
     * Calculates opacity of Toast
     * @param {number} left
     * @return {number}
     */
    const calcOpacity = left => {
        let opacity = 0;
        if (left > -200) opacity = (1 - (left * (1 / 50)));
        else opacity = (left * (1 / 350)) + 1;
        if (opacity < 0) opacity = 0;
        return opacity;
    }

    export default {
        data() {
            return {
                toasts: {}
            }
        },
        methods: {
            addToast: (text, time) => {
                if (typeof time !== 'number' || time < 0) {
                    time = 10000;
                }

                let toast = $(
                    '<div class=\'toast\'>' +
                        '<strong>' +
                            text +
                        '</strong>' +
                    '</div>'
                );

                $('#toast-container').append(toast);
                let revertInterval;
                toast.draggable({
                    axis: 'x',
                    revert: () => {
                        let position = toast.draggable('instance').position;
                        let revert = !(position.left >= 150 || position.left <= -150);
                        if (revert) {
                            let timePassed = 0;
                            revertInterval = setInterval(() => {
                                if (timePassed < 500) {
                                    timePassed += 25;
                                    let left = toast.prop('style').left;
                                    left = Number((left + '').replace('px', ''));
                                    toast.css({opacity: calcOpacity(left)});
                                } else {
                                    clearInterval(revertInterval);
                                }
                            }, 25);
                        }
                        return revert;
                    },
                    stop: (event, ui) => {
                        if (ui.position.left > -200 || ui.position.left < -150) {
                            toast.draggable('destroy').remove();
                        }
                    },
                    revertDuration: 500,
                    drag: (event, ui) => {
                        ui.helper.css({opacity: calcOpacity(ui.position.left)});
                    }
                });

                setTimeout(() => {
                    toast.draggable('destroy').remove();
                    clearInterval(revertInterval);
                }, time);
            }
        }
    }
</script>

<style>
    #toast-container {
        display: block;
        width: 0;
        top: 64px;
        right: 100px;
        position: fixed;
    }

    .toast:first-child {
        top: 0;
    }

    .toast {
        z-index: 10000 !important;
        animation-duration: 0.60s;
        animation-fill-mode: both;
        border-radius: 2px;
        cursor: pointer;
        top: 20px;
        /* right: 200px; */
        min-width: 225px;
        clear: both;
        margin-top: 10px;
        /* position: static; */
        height: auto;
        background-color: #323232;
        padding: 10px 25px;
        font-size: 1rem;
        font-weight: 300;
        justify-content: space-between;
        flex-direction: column;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }

    .toast strong {
        color: #fff;
    }
</style>
