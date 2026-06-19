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
    <path :fill="fill" :fill-opacity="opacity" d="M12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10.25 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m4.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-1.75 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 10.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-8.763 8.048a3.25 3.25 0 0 1 0-4.596L13.702 3.236a3.25 3.25 0 0 1 4.596 0l2.464 2.465a3.25 3.25 0 0 1 0 4.596L10.298 20.762a3.25 3.25 0 0 1-4.596 0zm1.061-3.536a1.75 1.75 0 0 0 0 2.475l2.464 2.465a1.75 1.75 0 0 0 2.475 0L10.94 18 6 13.06zM16.939 12l-4.94-4.94L7.06 12 12 16.94zm1.06-1.06 1.703-1.703a1.75 1.75 0 0 0 0-2.475l-2.465-2.464a1.75 1.75 0 0 0-2.475 0L13.06 6zm-7.767-5.647-.995-.995a1.75 1.75 0 0 0-2.475 0L4.298 6.762a1.75 1.75 0 0 0 0 2.475l.995.995-1.061 1.06-.995-.994a3.25 3.25 0 0 1 0-4.596l2.465-2.465a3.25 3.25 0 0 1 4.596 0l.995.995zm2.475 14.475.994.994a3.25 3.25 0 0 0 4.597 0l2.464-2.464a3.25 3.25 0 0 0 0-4.596l-.995-.995-1.06 1.06.994.995a1.75 1.75 0 0 1 0 2.475l-2.464 2.465a1.75 1.75 0 0 1-2.475 0l-.995-.995z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPatch',
  mixins: [icon]
};
</script>
