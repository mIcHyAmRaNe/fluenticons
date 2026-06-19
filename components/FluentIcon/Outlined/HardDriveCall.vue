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
    <path :fill="fill" :fill-opacity="opacity" d="M5.415 5.27A2.25 2.25 0 0 1 7.441 4h9.118c.863 0 1.65.493 2.026 1.27L20.873 10a2.25 2.25 0 0 0-1.434.48l-2.204-4.557a.75.75 0 0 0-.676-.423H7.441a.75.75 0 0 0-.676.423L4.31 11h14.648q-.13.195-.22.42l-.425 1.08H4.25a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h11.311q-.149.13-.275.29l-.8 1.009a2 2 0 0 0-.142.201H4.25A2.25 2.25 0 0 1 2 16.75v-3.677c0-.49.11-.974.324-1.415zm13.777 7.725.476-1.205c.242-.614.92-.933 1.548-.728l.431.141c.724.237 1.326.806 1.35 1.569.1 3.11-2.476 7.583-5.213 9.055-.673.362-1.468.123-2.035-.391l-.337-.305a1.253 1.253 0 0 1-.142-1.706l.8-1.01c.29-.367.767-.53 1.22-.42l1.292.313q1.654-1.095 1.774-3.079l-.917-.964a1.2 1.2 0 0 1-.247-1.27" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHardDriveCall',
  mixins: [icon]
};
</script>
