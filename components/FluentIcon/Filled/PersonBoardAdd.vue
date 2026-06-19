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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v8.5A3.25 3.25 0 0 0 6.25 18h4.769a6.5 6.5 0 0 1 .303-2.526q-.39.026-.822.026c-1.32 0-2.445-.257-3.24-.76-.419-.266-.73-.524-.938-.83-.205-.3-.322-.664-.322-1.16v-.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.337.819 6.5 6.5 0 0 1 3.163-.55V6.25A3.25 3.25 0 0 0 14.75 3zm-.24 16h5.164a6.5 6.5 0 0 0 .558 1.5H8.75A3.25 3.25 0 0 1 6.01 19M20.5 8.75v2.982a6.5 6.5 0 0 0-1.5-.558V6.01a3.25 3.25 0 0 1 1.5 2.739M12.75 7.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonBoardAdd',
  mixins: [icon]
};
</script>
