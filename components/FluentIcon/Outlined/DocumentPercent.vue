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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m5.672-10c.53 0 1.04.21 1.415.586l5.827 5.827c.375.375.586.885.586 1.415V20a2 2 0 0 1-2 2h-6.812a6.5 6.5 0 0 0 1.079-1.5H18a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v7.076a6.5 6.5 0 0 0-1.5.422V4a2 2 0 0 1 2-2zM9 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m.33-2.828a.5.5 0 0 0-.707 0l-4.95 4.95a.5.5 0 0 0 .707.707l4.95-4.95a.5.5 0 0 0 0-.707M9 18.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-5-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M13.5 8a.5.5 0 0 0 .5.5h3.379L13.5 4.621z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentPercent',
  mixins: [icon]
};
</script>
