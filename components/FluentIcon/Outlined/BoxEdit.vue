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
    <path :fill="fill" :fill-opacity="opacity" d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.175v9.653a1.75 1.75 0 0 0 1.093 1.621l7.498 3.04q.211.085.428.145.015-.112.044-.226l.458-1.83c.162-.648.497-1.24.97-1.712l.26-.26v-6.84L20.5 7.773v3.235a3.3 3.3 0 0 1 1.5.253V7.175a1.75 1.75 0 0 0-1.093-1.622zm-2.254 1.39a2.25 2.25 0 0 1 1.69 0l6.593 2.673-2.67 1.03L9.241 4.68zM7.215 5.5l7.477 2.908-2.69 1.039L4.59 6.565zM3.5 7.75l7.75 3.014v9.371l-.095-.036-7.499-3.04a.25.25 0 0 1-.156-.232zm15.6 4.92-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBoxEdit',
  mixins: [icon]
};
</script>
