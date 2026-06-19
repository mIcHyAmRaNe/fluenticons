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
    <path :fill="fill" :fill-opacity="opacity" d="M15 15.504c0-.526.09-1.03.256-1.5H6.253a2.25 2.25 0 0 0-2.25 2.25v.577c0 .893.32 1.757.9 2.436 1.565 1.835 3.952 2.74 7.097 2.74q2.267.001 4-.628v-1.62c-1.082.497-2.41.748-4 .748-2.738 0-4.704-.746-5.957-2.214a2.25 2.25 0 0 1-.54-1.462v-.578a.75.75 0 0 1 .75-.749zm-3-13.5a5 5 0 0 1 5 5.002 5 5 0 1 1-5-5.002m0 1.5a3.5 3.5 0 1 0 .002 7.002A3.5 3.5 0 0 0 12 3.505m11 12a3.5 3.5 0 1 1-7.001.002A3.5 3.5 0 0 1 23 15.505m-1 3.744a4.5 4.5 0 0 1-2.5.758c-.925 0-1.785-.28-2.5-.758v3.506c0 .201.226.32.392.206l2.108-1.453 2.108 1.453a.25.25 0 0 0 .392-.206z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPersonRibbon',
  mixins: [icon]
};
</script>
