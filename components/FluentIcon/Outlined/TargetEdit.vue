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
    <path :fill="fill" :fill-opacity="opacity" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-6-2a5.999 5.999 0 1 1 11.986.368l-2.66 2.66a4.499 4.499 0 1 0-.301.301l-2.535 2.535q-.06.06-.118.124A6 6 0 0 1 6.001 12m5.998-8.5a8.5 8.5 0 0 1 8.443 7.512 3.3 3.3 0 0 1 1.529.237C21.587 6.077 17.269 2 11.999 2 6.477 2 2 6.477 2 12c0 5.186 3.947 9.45 9 9.951q-.004-.267.065-.545l.233-.934A8.501 8.501 0 0 1 12 3.5m7.1 9.17-5.9 5.9a2.7 2.7 0 0 0-.707 1.248l-.457 1.83a1.087 1.087 0 0 0 1.317 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706l5.9-5.902a2.285 2.285 0 0 0-3.23-3.231" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTargetEdit',
  mixins: [icon]
};
</script>
