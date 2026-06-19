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
    <path :fill="fill" :fill-opacity="opacity" d="M2.923 4.129A2.25 2.25 0 0 1 5.17 2h1.158a2.25 2.25 0 0 1 2.246 2.129l.838 15.5A2.25 2.25 0 0 1 7.166 22H4.332a2.25 2.25 0 0 1-2.247-2.371zM9.511 22h10.238a2.25 2.25 0 0 0 2.25-2.25V6a.75.75 0 0 0-1.259-.551l-5.24 4.838V6a.75.75 0 0 0-1.259-.551L9.866 9.487l.545 10.088c.05.938-.3 1.8-.9 2.425m3.488-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4.5h-6z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBuildingFactory',
  mixins: [icon]
};
</script>
