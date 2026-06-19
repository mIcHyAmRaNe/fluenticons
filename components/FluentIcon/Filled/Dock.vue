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
    <path :fill="fill" :fill-opacity="opacity" d="M12.707 3.293a1 1 0 0 0-1.414 0l-3.5 3.5a1 1 0 0 0 1.414 1.414L11 6.414V15a1 1 0 1 0 2 0V6.414l1.793 1.793a1 1 0 1 0 1.414-1.414zM4 12.75a.75.75 0 0 1 .75-.75H9a1 1 0 1 0 0-2H4.75A2.75 2.75 0 0 0 2 12.75v4.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25v-4.5A2.75 2.75 0 0 0 19.25 10H15a1 1 0 1 0 0 2h4.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDock',
  mixins: [icon]
};
</script>
