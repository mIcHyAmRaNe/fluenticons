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
    <path :fill="fill" :fill-opacity="opacity" d="M7.75 9.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 1 0 0 1.5h3.832l.183-.367c.265-.53.672-.908 1.138-1.133zm0 3.75h2.708l-.75 1.5H11.25a.75.75 0 1 1 0-1.5m-5 4.5h5.46l-.44.88a2.5 2.5 0 0 0-.216.62H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v8.655l-1.26-2.522a2.6 2.6 0 0 0-.24-.391V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75m2.5-7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8.411-3.92c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 21.5 23h-7.994a1.5 1.5 0 0 1-1.343-2.172zm1.843 2.666a.5.5 0 0 0-1 0v3.001a.5.5 0 0 0 1 0zm-.5 5.503a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextBulletListSquareWarning',
  mixins: [icon]
};
</script>
