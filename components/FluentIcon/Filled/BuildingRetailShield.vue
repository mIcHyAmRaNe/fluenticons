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
    <path :fill="fill" :fill-opacity="opacity" d="M17.01 11.194a.713.713 0 0 1 .98 0c.652.651 1.907 1.686 3.45 1.899.307.042.56.285.56.589v2.838c0 3.816-3.58 5.2-4.353 5.456a.46.46 0 0 1-.293 0C16.578 21.72 13 20.336 13 16.52v-2.838c0-.304.253-.547.56-.59 1.543-.212 2.798-1.247 3.45-1.898M20 3a2 2 0 0 1 1 3.732v5.242c-1.018-.32-1.86-1.038-2.31-1.487a1.66 1.66 0 0 0-.69-.412V8.75a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h5.411c-.1.2-.161.43-.161.685V15H6.75a.75.75 0 0 0-.75.75V21H3.75a.75.75 0 0 1-.75-.75V6.732A2 2 0 0 1 4 3zm-8.5 18h-4v-4.5h4zm5-10.68q-.106.075-.2.167c-.286.286-.732.68-1.28 1.013H7.5v-2h9zM4 4.5a.5.5 0 0 0 0 1h16a.5.5 0 0 0 0-1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBuildingRetailShield',
  mixins: [icon]
};
</script>
