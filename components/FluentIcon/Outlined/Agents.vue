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
    <path :fill="fill" :fill-opacity="opacity" d="M15.757 4.5c.346 0 .666.185.839.485l3.823 6.64a.75.75 0 0 1 0 .75l-3.886 6.75a.75.75 0 0 1-.65.375H12.5a.75.75 0 0 0 0 1.5h3.383a2.25 2.25 0 0 0 1.95-1.127l3.886-6.75c.4-.695.4-1.55 0-2.246l-3.823-6.64a2.469 2.469 0 0 0-4.491.483L8.912 18.84a.948.948 0 0 1-1.736.166L3.56 12.379a.75.75 0 0 1 .009-.733l3.898-6.77a.75.75 0 0 1 .65-.376h3.132a.75.75 0 0 0 0-1.5H8.117a2.25 2.25 0 0 0-1.95 1.127l-3.897 6.77a2.25 2.25 0 0 0-.026 2.2l3.615 6.627a2.448 2.448 0 0 0 4.483-.43l4.492-14.12a.97.97 0 0 1 .923-.674" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedAgents',
  mixins: [icon]
};
</script>
