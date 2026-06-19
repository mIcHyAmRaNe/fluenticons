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
    <path :fill="fill" :fill-opacity="opacity" d="M4 13a8 8 0 0 1 15.809-1.747 3.5 3.5 0 0 1 2.147 2.69Q22 13.478 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.922 7.065 1 1 0 0 0 1.416-1.413A7.97 7.97 0 0 1 4 13m13.69-1.906a6 6 0 1 0-9.934 6.149 1 1 0 1 0 1.416-1.415 4 4 0 1 1 6.737-3.681 3.5 3.5 0 0 1 1.782-1.053M10 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0m11 1.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCommunicationPerson',
  mixins: [icon]
};
</script>
