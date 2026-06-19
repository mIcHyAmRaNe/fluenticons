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
    <path :fill="fill" :fill-opacity="opacity" d="m17.402 4.723 2.718 10.142a2.75 2.75 0 0 1-1.945 3.368l-6.278 1.682a2.75 2.75 0 0 1-3.368-1.944L5.81 7.828A2.75 2.75 0 0 1 7.756 4.46l6.278-1.682a2.75 2.75 0 0 1 3.368 1.945m-6.438 3.019a1 1 0 1 0-1.932.517 1 1 0 0 0 1.932-.517m-5.163 3.917 1.762 6.57a3.73 3.73 0 0 0 1.002 1.713l-.443-.023a2.75 2.75 0 0 1-2.602-2.89zm-.925-1.479-.355 6.796c-.037.699.12 1.363.424 1.94l-.414-.16a2.75 2.75 0 0 1-1.582-3.553z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledStyleGuide',
  mixins: [icon]
};
</script>
