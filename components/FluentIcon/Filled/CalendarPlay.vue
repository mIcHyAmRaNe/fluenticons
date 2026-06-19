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
    <path :fill="fill" :fill-opacity="opacity" d="M21 8.5v3.522A6.5 6.5 0 0 0 12.022 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5zM17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3zm-.25 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-.904-8q.174 0 .317.097l2.807 1.84q.13.084.205.223.075.136.075.298a.65.65 0 0 1-.112.367.6.6 0 0 1-.159.157l-2.806 1.915a.7.7 0 0 1-.159.077.55.55 0 0 1-.395-.023.7.7 0 0 1-.192-.135.7.7 0 0 1-.13-.2.6.6 0 0 1-.047-.237v-3.758a.62.62 0 0 1 .366-.57.5.5 0 0 1 .23-.05" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCalendarPlay',
  mixins: [icon]
};
</script>
