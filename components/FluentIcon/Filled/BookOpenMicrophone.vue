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
    <path :fill="fill" :fill-opacity="opacity" d="M22.25 16a.75.75 0 0 1 .75.75 4.75 4.75 0 0 1-4 4.69v.81a.75.75 0 0 1-1.5 0v-.81a4.75 4.75 0 0 1-4-4.69.75.75 0 0 1 1.5 0 3.25 3.25 0 0 0 6.5 0 .75.75 0 0 1 .75-.75M10 4c.768 0 1.47.289 2 .764A3 3 0 0 1 14 4h6a2 2 0 0 1 2 2v9.02a1.8 1.8 0 0 0-.5.15v-.92c0-1.15-.598-2.16-1.5-2.738V6h-6a1 1 0 0 0-1 1v8.526c-.309.316-.5.747-.5 1.224 0 1.186.36 2.287.975 3.202A3 3 0 0 1 12 19.236 3 3 0 0 1 10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8.25 8a2.25 2.25 0 0 1 2.25 2.25v2.5a2.25 2.25 0 0 1-4.5 0v-2.5A2.25 2.25 0 0 1 18.25 12M4 18h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBookOpenMicrophone',
  mixins: [icon]
};
</script>
