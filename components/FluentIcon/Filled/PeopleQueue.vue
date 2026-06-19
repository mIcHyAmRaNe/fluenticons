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
    <path :fill="fill" :fill-opacity="opacity" d="M10.5 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-5.75 4A1.75 1.75 0 0 0 3 11.75v4.75a4.5 4.5 0 1 0 9 0v-4.75A1.75 1.75 0 0 0 10.25 10zm6.11 10.854A5.49 5.49 0 0 0 13 16.5v-4.75c0-.665-.236-1.274-.629-1.75h2.379c.966 0 1.75.784 1.75 1.75v4.75a4.5 4.5 0 0 1-5.64 4.354M11.5 6c0 1-.367 1.913-.973 2.614a3 3 0 1 0 0-5.229c.606.702.973 1.616.973 2.615m3.86 14.854A5.49 5.49 0 0 0 17.5 16.5v-4.75c0-.665-.236-1.274-.629-1.75h2.379c.966 0 1.75.784 1.75 1.75v4.75a4.5 4.5 0 0 1-5.64 4.354M16 6c0 1-.367 1.913-.973 2.614a3 3 0 1 0 0-5.229C15.633 4.088 16 5.002 16 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPeopleQueue',
  mixins: [icon]
};
</script>
