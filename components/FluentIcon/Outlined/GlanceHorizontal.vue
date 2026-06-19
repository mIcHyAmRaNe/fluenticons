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
    <path :fill="fill" :fill-opacity="opacity" d="M13.001 4.752a1.75 1.75 0 0 0-1.75-1.75h-6.5a1.75 1.75 0 0 0-1.75 1.75v4.5c0 .966.783 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75zm-4.012 9.982a1.75 1.75 0 0 0-1.75-1.75H4.75A1.75 1.75 0 0 0 3 14.734v4.514c0 .967.783 1.75 1.75 1.75h2.488a1.75 1.75 0 0 0 1.75-1.75zM11.5 4.752v4.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25v-4.5a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25m-4.012 9.982v4.514a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-4.514a.25.25 0 0 1 .25-.25h2.488a.25.25 0 0 1 .25.25m13.514.014a1.75 1.75 0 0 0-1.75-1.75h-6.5a1.75 1.75 0 0 0-1.745 1.607l-.005.143v4.5c0 .967.783 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75zm-1.5 0v4.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25v-4.5l.006-.057a.25.25 0 0 1 .244-.193h6.5a.25.25 0 0 1 .25.25m1.5-9.996a1.75 1.75 0 0 0-1.75-1.75h-2.5a1.75 1.75 0 0 0-1.75 1.75v4.5c0 .966.783 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75zm-1.5 4.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25v-4.5a.25.25 0 0 1 .25-.25h2.5a.25.25 0 0 1 .25.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedGlanceHorizontal',
  mixins: [icon]
};
</script>
