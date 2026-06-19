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
    <path :fill="fill" :fill-opacity="opacity" d="M21.25 4a.75.75 0 0 1 .75.75v6.5A3.75 3.75 0 0 1 18.25 15H4.587l3.72 3.72a.75.75 0 0 1 .072.976l-.072.084a.75.75 0 0 1-.977.073l-.084-.073-5-5a.75.75 0 0 1-.073-.976l.073-.084 5-5a.75.75 0 0 1 1.133.976l-.072.084-3.72 3.72h13.665a2.25 2.25 0 0 0 2.244-2.096l.006-.154v-6.5a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowEnterLeft',
  mixins: [icon]
};
</script>
