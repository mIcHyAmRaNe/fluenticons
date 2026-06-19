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
    <path :fill="fill" :fill-opacity="opacity" d="M4.166 21.986a1.95 1.95 0 0 1-2.154-2.153L3.352 7.77c.181-1.625 2.161-2.32 3.317-1.163l1.268 1.267L13.24 2.57a1.95 1.95 0 0 1 2.758 0L21.427 8a1.95 1.95 0 0 1 0 2.757l-5.304 5.304 1.268 1.267c1.156 1.156.461 3.136-1.164 3.317z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowOutlineDownLeft',
  mixins: [icon]
};
</script>
