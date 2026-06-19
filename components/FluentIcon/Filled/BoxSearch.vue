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
    <path :fill="fill" :fill-opacity="opacity" d="M13.409 2.512a3.75 3.75 0 0 0-2.818 0l-2.19.888 9.592 3.73 3.374-1.303a1.8 1.8 0 0 0-.46-.275zM22 7.19l-9.25 3.574v10.923q.336-.068.659-.199l7.498-3.04A1.75 1.75 0 0 0 22 16.826zm-10.75 3.574v10.01L9.425 18.95A5.5 5.5 0 0 0 2 11.6V7.19zM2.633 5.827 12 9.446l3.917-1.514-9.543-3.71-3.281 1.33q-.256.104-.46.275M4.5 21a4.5 4.5 0 0 0 2.607-.832L9.72 22.78a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 4.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBoxSearch',
  mixins: [icon]
};
</script>
