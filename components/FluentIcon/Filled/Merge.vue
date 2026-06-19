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
    <path :fill="fill" :fill-opacity="opacity" d="M3 7a1 1 0 0 1 1-1h2.757a4 4 0 0 1 2.829 1.172l2.95 2.95a3 3 0 0 0 2.12.878h3.928l-3.29-3.289a1 1 0 0 1 1.413-1.414l5 4.996a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 13h-3.969a3 3 0 0 0-2.081.879l-2.95 2.95A4 4 0 0 1 6.757 18H4a1 1 0 1 1 0-2h2.757a2 2 0 0 0 1.415-.586l2.95-2.95q.252-.252.535-.464a5 5 0 0 1-.536-.464l-2.95-2.95A2 2 0 0 0 6.758 8H4a1 1 0 0 1-1-1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMerge',
  mixins: [icon]
};
</script>
