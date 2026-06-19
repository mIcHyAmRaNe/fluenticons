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
    <path :fill="fill" :fill-opacity="opacity" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v5.77a6.5 6.5 0 0 0-1.5-.707V8.5h-15v9.25c0 .966.784 1.75 1.75 1.75h5.063q.128.393.302.764L11.39 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75m1.75 7.874a5.5 5.5 0 0 1 1.5.882 5.501 5.501 0 0 1-6.166 9.058l-2.187.666a.5.5 0 0 1-.624-.625l.666-2.186A5.5 5.5 0 0 1 17.475 12h.026c.705 0 1.38.133 1.999.374m.002 4.627a.5.5 0 1 0 0-1H15.5a.5.5 0 1 0 0 1zm-4.001 2h2a.5.5 0 1 0 0-1h-2a.5.5 0 1 0 0 1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCalendarChat',
  mixins: [icon]
};
</script>
