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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.25-9a3.25 3.25 0 0 1 3.245 3.066L21 6.25v5.772A6.47 6.47 0 0 0 17.5 11c-1.845 0-3.51.769-4.693 2.003h-4.06l-.1.007a.75.75 0 0 0 0 1.486l.1.007h2.984A6.5 6.5 0 0 0 11 17.5c0 1.29.374 2.49 1.022 3.501L6.25 21a3.25 3.25 0 0 1-3.245-3.066L3 17.75V9.372a2.25 2.25 0 1 0 .224-4.31 3.25 3.25 0 0 1 2.831-2.056L6.25 3zm.75 17.002h-2l.007.116a1 1 0 0 0 1.993-.116M17.503 14l-.167.007c-.937.085-1.67.764-1.809 1.635l-.018.155-.006.204v1.293l-.856.854a.5.5 0 0 0 .267.846l.086.008h5a.5.5 0 0 0 .41-.788l-.056-.066-.849-.849v-1.352L19.5 15.8c-.077-1.012-.944-1.8-1.997-1.8m-2.25-4.504H8.747l-.102.007a.75.75 0 0 0 0 1.486l.102.007h6.504l.102-.007a.75.75 0 0 0-.102-1.493M3.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledChannelAlert',
  mixins: [icon]
};
</script>
