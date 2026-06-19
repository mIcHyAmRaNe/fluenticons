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
    <path :fill="fill" :fill-opacity="opacity" d="M3.75 5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h9.95a1.5 1.5 0 0 1 1.118-.5h6.14a.75.75 0 0 0-.707-1zm8.698 4-.711 1.5H3.75a.75.75 0 0 1 0-1.5zm-1.895 4-.407.858c-.1.211-.146.43-.146.642H3.75a.75.75 0 0 1 0-1.5zm4.258-6h6.32c.381 0 .622.413.434.748l-1.828 3.268h1.513c.64 0 .985.755.567 1.244l-6.406 7.48c-.521.61-1.496.053-1.243-.71l1.326-4H11.5a.502.502 0 0 1-.451-.716l3.31-7.027a.5.5 0 0 1 .452-.287" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextColumnOneWideLightning',
  mixins: [icon]
};
</script>
