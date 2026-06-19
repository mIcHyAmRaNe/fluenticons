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
    <path :fill="fill" :fill-opacity="opacity" d="M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v15.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75zM17 20.5h.75a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H17v2.75a.75.75 0 0 1-1.5 0V3.5h-7v2.75a.75.75 0 0 1-1.5 0V3.5h-.75a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75H7v-2.75a.75.75 0 0 1 1.5 0v2.75h7v-2.75a.75.75 0 0 1 1.5 0zm-9.25-12a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m9.25.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentMargins',
  mixins: [icon]
};
</script>
