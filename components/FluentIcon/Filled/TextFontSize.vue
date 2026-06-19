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
    <path :fill="fill" :fill-opacity="opacity" d="M15.5 3a1 1 0 0 1 .939.655l5.5 15a1 1 0 0 1-1.878.69l-1.41-3.845H12.35l-1.41 3.845a1 1 0 0 1-1.87.017L8.343 17.5H4.656l-.724 1.862a1 1 0 1 1-1.864-.724l3.5-9 .066-.138a1 1 0 0 1 1.798.138l2.54 6.533 4.59-12.516.064-.14A1 1 0 0 1 15.5 3M5.434 15.5h2.132L6.5 12.758zm7.647-2h4.838L15.5 6.903z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextFontSize',
  mixins: [icon]
};
</script>
