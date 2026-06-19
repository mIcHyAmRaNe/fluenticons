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
    <path :fill="fill" :fill-opacity="opacity" d="M16.25 2a.75.75 0 0 1 .75.75V4h.75A2.25 2.25 0 0 1 20 6.25v10.44a1.5 1.5 0 0 1-.44 1.06l-3.81 3.81a1.5 1.5 0 0 1-1.06.44H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4H7V2.75a.75.75 0 0 1 1.5 0V4h2.75V2.75a.75.75 0 0 1 1.5 0V4h2.75V2.75a.75.75 0 0 1 .75-.75m-10 3.5a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75H14v-2.25A2.25 2.25 0 0 1 16.25 16h2.25V6.25a.75.75 0 0 0-.75-.75zm10 12a.75.75 0 0 0-.75.75v1.44l2.19-2.19zm-4.923-1.496a.75.75 0 0 1 0 1.492l-.077.004h-3a.75.75 0 0 1 0-1.5h3zM15.75 12a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zm0-4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedNotepad',
  mixins: [icon]
};
</script>
