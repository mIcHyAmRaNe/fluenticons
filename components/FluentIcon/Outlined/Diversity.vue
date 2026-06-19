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
    <path :fill="fill" :fill-opacity="opacity" d="M13 5.25A2.25 2.25 0 0 1 15.25 3h3.5A2.25 2.25 0 0 1 21 5.25v3.5A2.25 2.25 0 0 1 18.75 11h-3.5A2.25 2.25 0 0 1 13 8.75zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75zm-6.8-.602a1.619 1.619 0 0 0-2.9 0L3.178 8.614C2.63 9.707 3.415 11 4.628 11h4.744c1.213 0 1.999-1.293 1.45-2.386zm-1.56.674c.02-.04.038-.052.047-.057A.13.13 0 0 1 7 4.5c.028 0 .05.008.063.015.009.005.026.017.047.057l2.372 4.716a.14.14 0 0 1 .018.076.16.16 0 0 1-.072.123.1.1 0 0 1-.056.013H4.628a.1.1 0 0 1-.056-.013.16.16 0 0 1-.071-.123.14.14 0 0 1 .017-.076zM4.5 17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M7 13a4 4 0 1 0 0 8 4 4 0 0 0 0-8m10.625-.255a1.25 1.25 0 0 0-1.25 0l-2.748 1.586a1.25 1.25 0 0 0-.625 1.083v3.172c0 .447.239.86.625 1.083l2.748 1.586a1.25 1.25 0 0 0 1.25 0l2.748-1.586a1.25 1.25 0 0 0 .625-1.083v-3.172c0-.447-.239-.86-.625-1.083zm-3.123 2.813L17 14.116l2.498 1.442v2.884L17 19.884l-2.498-1.442z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDiversity',
  mixins: [icon]
};
</script>
