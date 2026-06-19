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
    <path :fill="fill" :fill-opacity="opacity" d="M15.25 3A2.25 2.25 0 0 0 13 5.25v3.5A2.25 2.25 0 0 0 15.25 11h3.5A2.25 2.25 0 0 0 21 8.75v-3.5A2.25 2.25 0 0 0 18.75 3zm-6.8.898a1.619 1.619 0 0 0-2.9 0L3.178 8.614C2.63 9.707 3.415 11 4.628 11h4.744c1.213 0 1.999-1.293 1.45-2.386zM3 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0m13.375-4.255a1.25 1.25 0 0 1 1.25 0l2.748 1.586c.386.223.625.636.625 1.083v3.172c0 .447-.239.86-.625 1.083l-2.748 1.586a1.25 1.25 0 0 1-1.25 0l-2.748-1.586a1.25 1.25 0 0 1-.625-1.083v-3.172c0-.447.239-.86.625-1.083z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDiversity',
  mixins: [icon]
};
</script>
