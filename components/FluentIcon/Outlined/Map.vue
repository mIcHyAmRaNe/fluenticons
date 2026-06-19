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
    <path :fill="fill" :fill-opacity="opacity" d="m9.203 4 .047-.002.046.001.068.007.016.004q.129.02.25.092l.053.034 5.07 3.565L19.82 4.14a.75.75 0 0 1 1.174.51l.007.104v10.632a.75.75 0 0 1-.238.548l-.08.066-5.5 3.866a.74.74 0 0 1-.828.023L9.25 16.297l-5.07 3.565a.75.75 0 0 1-1.174-.51l-.007-.104V8.616a.75.75 0 0 1 .238-.548l.08-.066 5.5-3.866a.8.8 0 0 1 .2-.101l.123-.028zm10.298 2.197-4 2.812v8.799l4-2.812zM8.5 6.193l-4 2.812v8.8l4-2.813zm1.502 0v8.8l4 2.811V9.005z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMap',
  mixins: [icon]
};
</script>
