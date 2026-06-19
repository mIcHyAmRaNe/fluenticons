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
    <path :fill="fill" :fill-opacity="opacity" d="M17.751 4.5c2.321 0 4.25 1.822 4.25 4.125 0 1.407-.721 2.633-1.81 3.375 1.089.742 1.81 1.968 1.81 3.375 0 2.303-1.929 4.125-4.25 4.125-.85 0-1.715-.243-2.447-.654-.73-.41-1.38-1.015-1.735-1.782a.75.75 0 0 1 1.362-.63c.19.412.578.808 1.106 1.104a3.6 3.6 0 0 0 1.714.462c1.544 0 2.75-1.2 2.75-2.625 0-1.424-1.206-2.625-2.75-2.625H16.75a.75.75 0 0 1 0-1.5h1.001c1.544 0 2.75-1.2 2.75-2.625 0-1.424-1.206-2.625-2.75-2.625-.575 0-1.19.167-1.714.462-.528.296-.915.692-1.106 1.104a.75.75 0 0 1-1.362-.63c.355-.767 1.005-1.372 1.735-1.782A5.1 5.1 0 0 1 17.75 4.5m-7 .5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V12.5H3.5v5.75a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 1.5 0V11H10V5.75a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextHeader3',
  mixins: [icon]
};
</script>
