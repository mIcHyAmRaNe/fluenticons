<template>
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
    <path :fill="fill" :fill-opacity="opacity" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v5.658a1.4 1.4 0 0 0-.988-.791 5 5 0 0 0-.512-.085V8.5h-15v9.25c0 .966.784 1.75 1.75 1.75h5.676l-.186.186A2.5 2.5 0 0 0 11.044 21H6.25A3.25 3.25 0 0 1 3 17.75zm12.994 5.683L14.28 10.22a.75.75 0 1 0-1.06 1.06l1.691 1.692a5.1 5.1 0 0 1 1.083-1.04M4.5 7h15v-.75a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25zm6.28 4.28a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-2.47-2.47zm9.019.814c.353.077.44.507.185.762l-1.905 1.904a1.527 1.527 0 0 0 2.16 2.16l1.905-1.904c.255-.255.685-.168.762.185a4.075 4.075 0 0 1-5.57 4.622l-2.729 2.73a1.527 1.527 0 0 1-2.16-2.16l2.73-2.73a4.074 4.074 0 0 1 4.622-5.57" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWindowDevTools',
  mixins: [icon]
};
</script>
