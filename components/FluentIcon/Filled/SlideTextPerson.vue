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
    <path :fill="fill" :fill-opacity="opacity" d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h8.252L13 19.875v-.103A2.77 2.77 0 0 1 15.773 17h.277A3.5 3.5 0 0 1 15 14.5c0-.744.232-1.433.627-2H6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .741.634A3.5 3.5 0 0 1 21.965 14H22V6.75A2.75 2.75 0 0 0 19.25 4zM6 8.75A.75.75 0 0 1 6.75 8h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 6 8.75m.75 6.75a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5zm14.25-1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSlideTextPerson',
  mixins: [icon]
};
</script>
