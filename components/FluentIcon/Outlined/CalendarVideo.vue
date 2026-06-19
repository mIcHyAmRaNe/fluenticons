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
    <path :fill="fill" :fill-opacity="opacity" d="M4.5 1.25A3.25 3.25 0 0 0 1.25 4.5v9a3.25 3.25 0 0 0 3.25 3.25h.75v-1.5H4.5a1.75 1.75 0 0 1-1.75-1.75V7h12.5v2.25h.25c.435 0 .855.065 1.25.187V4.5a3.25 3.25 0 0 0-3.25-3.25zM15.25 5.5H2.75v-1c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75zM9.5 10.25a3.25 3.25 0 0 0-3.25 3.25v6a3.25 3.25 0 0 0 3.25 3.25h6a3.25 3.25 0 0 0 3.247-3.098l2.474 1.8c1.156.84 2.779.014 2.779-1.416v-7.072c0-1.43-1.623-2.257-2.78-1.415l-2.473 1.799A3.25 3.25 0 0 0 15.5 10.25zm9.25 4.95 3.353-2.438a.25.25 0 0 1 .397.202v7.072a.25.25 0 0 1-.397.202L18.75 17.8zm-11-1.7c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75h-6a1.75 1.75 0 0 1-1.75-1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCalendarVideo',
  mixins: [icon]
};
</script>
