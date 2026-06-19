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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-6.28-6.28h-2.091l-1.41 3.845a1 1 0 0 1-1.87.017L8.343 17.5H4.656l-.724 1.862a1 1 0 0 1-1.864-.724l3.5-9 .066-.138a1 1 0 0 1 1.798.138l2.54 6.533 1.378-3.76-9.13-9.13a.75.75 0 0 1 0-1.061M15.5 3a1 1 0 0 1 .939.655l5.5 15q.023.07.038.14L16.682 13.5h1.237L15.5 6.903l-1.453 3.962-1.559-1.558 2.074-5.652.064-.14A1 1 0 0 1 15.5 3M5.434 15.5h2.132L6.5 12.758z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextFontSizeOff',
  mixins: [icon]
};
</script>
