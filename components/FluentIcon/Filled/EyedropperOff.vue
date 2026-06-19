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
    <path :fill="fill" :fill-opacity="opacity" d="m8.94 10-4.78 4.78a2.25 2.25 0 0 0-.659 1.592v.687l-1.28 2.347c-.836 1.533.841 3.21 2.374 2.375l2.347-1.28h.688a2.25 2.25 0 0 0 1.59-.66l4.78-4.78 6.72 6.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 0 0-1.06 1.06zm4 4.001-4.78 4.78a.75.75 0 0 1-.53.22h-.88a.75.75 0 0 0-.359.09l-2.515 1.373a.23.23 0 0 1-.159.032.26.26 0 0 1-.138-.075.26.26 0 0 1-.075-.138.23.23 0 0 1 .033-.158L4.91 17.61a.75.75 0 0 0 .09-.36v-.878a.75.75 0 0 1 .22-.53l4.78-4.78zm5.548-.928a1.75 1.75 0 0 1-1.818.414l-6.156-6.156a1.75 1.75 0 0 1 .414-1.818l.585-.586a1.75 1.75 0 0 1 2.475 0l.013.013 1.97-1.97a3.578 3.578 0 0 1 5.06 5.06L19.061 10l.013.013a1.75 1.75 0 0 1 0 2.475z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledEyedropperOff',
  mixins: [icon]
};
</script>
