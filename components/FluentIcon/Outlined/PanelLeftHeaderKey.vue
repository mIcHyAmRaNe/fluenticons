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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h5.95q.121-.235.313-.427l1.073-1.073H9.5v-8h11v.611a4.5 4.5 0 0 1 1.5.647V7.25A3.25 3.25 0 0 0 18.75 4zM20.5 9h-11V5.5h9.25c.966 0 1.75.784 1.75 1.75zM8 5.5v13H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75zM19.5 19a3.5 3.5 0 1 0-3.38-2.586.8.8 0 0 0-.15.116l-3.75 3.75a.75.75 0 0 0-.22.53v1.44c0 .414.336.75.75.75h1.75a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm1.5-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPanelLeftHeaderKey',
  mixins: [icon]
};
</script>
