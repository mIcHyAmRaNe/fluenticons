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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-2.776-2.775H4.25A2.25 2.25 0 0 1 2 16.755V7.25a2.25 2.25 0 0 1 1.96-2.23L2.22 3.28a.75.75 0 0 1 0-1.06M19.745 5a2.25 2.25 0 0 1 2.25 2.25v9.505a2.24 2.24 0 0 1-.567 1.49l-5.33-5.329a1 1 0 1 0-.516-.516l-2.794-2.795a1 1 0 0 0-1.4-1.4L8.184 5.001zM6.75 14.5l-.102.007a.75.75 0 0 0 0 1.486L6.75 16h8.19l-1.5-1.5zm.755-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2.545.11a1 1 0 1 0 1.344 1.344zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8.995 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledKeyboardOff',
  mixins: [icon]
};
</script>
