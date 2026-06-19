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
    <path :fill="fill" :fill-opacity="opacity" d="M3.75 2a.75.75 0 0 0-.75.75v1A3.25 3.25 0 0 0 6.25 7h11.5A3.25 3.25 0 0 0 21 3.75v-1a.75.75 0 0 0-1.5 0v1a1.75 1.75 0 0 1-1.75 1.75H15.5V2.75a.75.75 0 0 0-1.5 0V5.5h-4V2.75a.75.75 0 0 0-1.5 0V5.5H6.25A1.75 1.75 0 0 1 4.5 3.75v-1A.75.75 0 0 0 3.75 2m0 20a.75.75 0 0 1-.75-.75v-1A3.25 3.25 0 0 1 6.25 17h11.5A3.25 3.25 0 0 1 21 20.25v1a.75.75 0 0 1-1.5 0v-1a1.75 1.75 0 0 0-1.75-1.75H15.5v2.75a.75.75 0 0 1-1.5 0V18.5h-4v2.75a.75.75 0 0 1-1.5 0V18.5H6.25a1.75 1.75 0 0 0-1.75 1.75v1a.75.75 0 0 1-.75.75M12 13.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 12l1.47-1.47a.75.75 0 1 0-1.06-1.06L12 10.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L10.94 12l-1.47 1.47a.75.75 0 1 0 1.06 1.06zm-3.273-.31q.035-.039.072-.076L9.473 12l-.674-.674-.072-.076H2.75a.75.75 0 0 0 0 1.5zm6.796 0h5.727a.75.75 0 0 0 0-1.5h-5.727l-.072.076-.674.674.674.674z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTableDeleteRow',
  mixins: [icon]
};
</script>
