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
    <path :fill="fill" :fill-opacity="opacity" d="M14.5 7.25a.75.75 0 0 0 1.5 0V5h3.75A2.25 2.25 0 0 1 22 7.25v1.5c0 .567-.452.968-.939 1.008a2.25 2.25 0 0 0 0 4.484c.487.04.939.44.939 1.008v1.5A2.25 2.25 0 0 1 19.75 19H16v-2.25a.75.75 0 0 0-1.5 0V19H4.25A2.25 2.25 0 0 1 2 16.75v-1.5c0-.567.452-.968.938-1.008l.213-.027a2.251 2.251 0 0 0-.213-4.457A1.017 1.017 0 0 1 2 8.75v-1.5A2.25 2.25 0 0 1 4.25 5H14.5zm.75 2.75a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTicketHorizontal',
  mixins: [icon]
};
</script>
