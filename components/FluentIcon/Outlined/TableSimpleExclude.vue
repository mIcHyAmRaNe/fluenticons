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
    <path :fill="fill" :fill-opacity="opacity" d="M2 5.25A3.25 3.25 0 0 1 5.25 2h10a3.25 3.25 0 0 1 3.25 3.25V10a1 1 0 0 1-1 1H11v6.5a1 1 0 0 1-1 1H5.25A3.25 3.25 0 0 1 2 15.25zm15 0a1.75 1.75 0 0 0-1.75-1.75H11v6h6zM9.5 3.5H5.25A1.75 1.75 0 0 0 3.5 5.25V9.5h6zm-6 11.75c0 .966.784 1.75 1.75 1.75H9.5v-6h-6zm9-.5a2.25 2.25 0 0 1 2.25-2.25h5A2.25 2.25 0 0 1 22 14.75v5A2.25 2.25 0 0 1 19.75 22h-5a2.25 2.25 0 0 1-2.25-2.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTableSimpleExclude',
  mixins: [icon]
};
</script>
