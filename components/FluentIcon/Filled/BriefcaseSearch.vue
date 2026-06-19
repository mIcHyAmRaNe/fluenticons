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
    <path :fill="fill" :fill-opacity="opacity" d="M5.5 12a4.5 4.5 0 0 1 3.668 7.107l2.612 2.613a.75.75 0 1 1-1.06 1.06l-2.613-2.612A4.5 4.5 0 1 1 5.5 12M22 17.75A3.25 3.25 0 0 1 18.75 21h-6.275l-2.05-2.05a5.5 5.5 0 0 0 .358-3.975Q10.889 15 11 15h2a1 1 0 0 0 1-1h4.75c1.258 0 2.4-.49 3.25-1.29zM5.5 13.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M13.75 2A2.25 2.25 0 0 1 16 4.25V6h2.75q.084 0 .167.004a3.25 3.25 0 0 1-.167 6.496H14V12a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.5h-.728A5.48 5.48 0 0 0 5.5 11c-.898 0-1.745.216-2.493.598a3.24 3.24 0 0 1-1.003-2.515A3.25 3.25 0 0 1 5.25 6H8V4.25A2.25 2.25 0 0 1 10.25 2zm-3.5 1.5a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBriefcaseSearch',
  mixins: [icon]
};
</script>
