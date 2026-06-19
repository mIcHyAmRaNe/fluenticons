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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-.685-.684a4.72 4.72 0 0 1-2.784.904h-8a3.25 3.25 0 0 1-3.24-3h1.51c.12.848.848 1.5 1.73 1.5h8c.625 0 1.209-.178 1.704-.484l-2.5-2.5A3.23 3.23 0 0 1 14.75 18h-9.5A3.25 3.25 0 0 1 2 14.75v-9.5c0-.626.177-1.21.483-1.706L2.22 3.28a.75.75 0 0 1 0-1.06M19 6.01a3.25 3.25 0 0 1 3 3.24v8c0 .476-.072.934-.202 1.367l-1.3-1.3.002-.067v-8c0-.882-.652-1.609-1.5-1.73zM3.5 7.5v7.25c0 .966.784 1.75 1.75 1.75h9.5c.206 0 .403-.038.586-.104L6.439 7.5zM14.75 2A3.25 3.25 0 0 1 18 5.25v9.5l-.002.066-1.498-1.498V7.5h-5.818l-5.5-5.499L5.25 2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWindowMultipleOff',
  mixins: [icon]
};
</script>
