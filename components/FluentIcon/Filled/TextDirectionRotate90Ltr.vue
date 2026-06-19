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
    <path :fill="fill" :fill-opacity="opacity" d="M4.293 17.293a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L8 17.586V4a1 1 0 0 0-2 0v13.586l-.293-.293a1 1 0 0 0-1.414 0m9 1.414a1 1 0 0 1 1.414-1.414l.293.293V16a1 1 0 1 1 2 0v1.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0zM20 12a1 1 0 1 0 0-2h-9.25a1 1 0 1 0 0 2H15v1a1 1 0 1 0 2 0v-1zm0-8a1 1 0 1 0-2 0v3h-.25c-.895 0-1.87-.184-2.586-.642C14.511 5.939 14 5.255 14 4a1 1 0 1 0-2 0c0 1.945.864 3.26 2.086 4.042 1.158.742 2.56.958 3.664.958H19a1 1 0 0 0 1-1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextDirectionRotate90Ltr',
  mixins: [icon]
};
</script>
