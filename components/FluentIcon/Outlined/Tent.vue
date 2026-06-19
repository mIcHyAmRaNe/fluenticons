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
    <path :fill="fill" :fill-opacity="opacity" d="M11.22 2.22a.75.75 0 0 1 1.042-.018l1.756 1.639a20.8 20.8 0 0 0 4.235 3.056c.432.236.727.661.797 1.148L20.4 17.5h.85a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h.85l1.355-9.49c.065-.455.332-.857.726-1.093a20 20 0 0 0 3.84-2.998zM5.115 17.5h2.131a23.3 23.3 0 0 0 3.509-7.16l.525-1.8a.75.75 0 0 1 1.44 0l.525 1.8a23.3 23.3 0 0 0 3.509 7.16h2.131l-1.32-9.243a.06.06 0 0 0-.03-.043 22.3 22.3 0 0 1-4.54-3.276l-1.227-1.145-1.187 1.187a21.4 21.4 0 0 1-4.129 3.223.03.03 0 0 0-.012.019zm9.814 0A24.8 24.8 0 0 1 12 11.397 24.8 24.8 0 0 1 9.07 17.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTent',
  mixins: [icon]
};
</script>
