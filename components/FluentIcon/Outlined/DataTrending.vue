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
    <path :fill="fill" :fill-opacity="opacity" d="M4.5 3.75a.75.75 0 0 0-1.5 0v14A3.25 3.25 0 0 0 6.25 21h14a.75.75 0 0 0 0-1.5h-14a1.75 1.75 0 0 1-1.75-1.75zM14.75 6a.75.75 0 0 0 0 1.5h3.19l-4.69 4.69-1.97-1.97a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l3.22-3.22 1.97 1.97a.75.75 0 0 0 1.06 0l5.222-5.22v3.195a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDataTrending',
  mixins: [icon]
};
</script>
