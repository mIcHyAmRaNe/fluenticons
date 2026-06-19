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
    <path :fill="fill" :fill-opacity="opacity" d="M15.84 2.661a2.25 2.25 0 0 0-3.19-.023l-9.598 9.508a2.25 2.25 0 0 0 .007 3.204l5.1 5.008a2.25 2.25 0 0 0 3.175-.023l.215-.217a6.5 6.5 0 0 1-.478-1.65l-.803.812a.75.75 0 0 1-1.059.008L4.11 14.28a.75.75 0 0 1-.002-1.068l1.529-1.515 5.377 5.377a6.5 6.5 0 0 1 .362-1.759l-4.673-4.673 7.003-6.938a.75.75 0 0 1 1.064.007l4.91 5.009a.75.75 0 0 1-.003 1.052l-1.276 1.29c.58.08 1.135.237 1.655.46l.687-.695a2.25 2.25 0 0 0 .008-3.158z" />
    <path :fill="fill" :fill-opacity="opacity" d="M19.289 12.297A5.5 5.5 0 1 1 17.473 12m.027 0a5.5 5.5 0 0 1 1.789.297Zm0 0h-.027Z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedEraserMedium',
  mixins: [icon]
};
</script>
