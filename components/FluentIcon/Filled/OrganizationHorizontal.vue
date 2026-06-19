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
    <path :fill="fill" :fill-opacity="opacity" d="M5.748 16.002A3.752 3.752 0 1 1 9.426 11.5h2.072V8.25A2.25 2.25 0 0 1 13.748 6h.825a3.753 3.753 0 1 1 0 1.5h-.825a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h.825a3.753 3.753 0 1 1 0 1.5h-.825a2.25 2.25 0 0 1-2.25-2.25V13H9.426a3.754 3.754 0 0 1-3.678 3.002" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledOrganizationHorizontal',
  mixins: [icon]
};
</script>
