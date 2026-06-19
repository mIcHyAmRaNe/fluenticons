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
    <path :fill="fill" :fill-opacity="opacity" d="M5.5 12a4.5 4.5 0 0 1 3.668 7.107l2.612 2.613a.75.75 0 1 1-1.06 1.06l-2.613-2.612A4.5 4.5 0 1 1 5.5 12m8.25-10A2.25 2.25 0 0 1 16 4.25V6h2.75A3.25 3.25 0 0 1 22 9.25v8.5A3.25 3.25 0 0 1 18.75 21h-6.275l-1.5-1.5h7.775a1.75 1.75 0 0 0 1.75-1.75v-4.263a3.23 3.23 0 0 1-1.75.513H14a1 1 0 0 1-1 1h-2q-.111-.002-.216-.024A5.5 5.5 0 0 0 10 13.339V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5h4.75a1.75 1.75 0 0 0 1.75-1.75v-1.5a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 9.25v1.5c0 .206.037.403.103.586a5.5 5.5 0 0 0-1.603.92V9.25A3.25 3.25 0 0 1 5.25 6H8V4.25A2.25 2.25 0 0 1 10.25 2zM5.5 13.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m4.75-10a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBriefcaseSearch',
  mixins: [icon]
};
</script>
