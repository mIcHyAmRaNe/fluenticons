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
    <path :fill="fill" :fill-opacity="opacity" d="M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h8.617l-2.063-2.136c-1.48-1.532-1.696-3.857-.668-5.62a4.57 4.57 0 0 1 1.924-1.8 4.4 4.4 0 0 1 4.44.337 4.4 4.4 0 0 1 4-.523V9.947a2.25 2.25 0 0 0-.8-1.72zm8.527 15.64c1.364-1.412 1.364-3.702 0-5.114a3.6 3.6 0 0 0-.476-.413 3.406 3.406 0 0 0-4.465.413h-.072A3.41 3.41 0 0 0 13 12.346a3.57 3.57 0 0 0-1.5 1.404c-.81 1.39-.636 3.223.523 4.423l4.442 4.598a.74.74 0 0 0 1.07 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledHomeHeart',
  mixins: [icon]
};
</script>
