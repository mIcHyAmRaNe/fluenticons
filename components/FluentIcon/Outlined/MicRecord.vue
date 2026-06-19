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
    <path :fill="fill" :fill-opacity="opacity" d="M11 17.5c0 1.096.271 2.129.75 3.035v.715a.75.75 0 0 1-1.493.102l-.007-.102v-2.268a6.75 6.75 0 0 1-6.246-6.496L4 12.25v-.5a.75.75 0 0 1 1.493-.102l.007.102v.5a5.25 5.25 0 0 0 5.034 5.246l.216.004zM15 6v5.498a6.5 6.5 0 0 0-1.532.903q.032-.195.032-.401V6a2.5 2.5 0 0 0-5 0v6a2.5 2.5 0 0 0 3.303 2.368 6.5 6.5 0 0 0-.628 1.628L11 16a4 4 0 0 1-4-4V6a4 4 0 1 1 8 0m5 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m3 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9.5 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMicRecord',
  mixins: [icon]
};
</script>
