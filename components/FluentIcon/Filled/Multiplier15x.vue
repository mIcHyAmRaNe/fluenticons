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
    <path :fill="fill" :fill-opacity="opacity" d="M6 7.9a1 1 0 0 0-1.854-.52l-.073.121c-.403.667-.842 1.394-2.087 2.14a1 1 0 0 0 1.029 1.716A8.5 8.5 0 0 0 4 10.671V16a1 1 0 1 0 2 0zm5-.9a1 1 0 0 0-.99.859l-.5 3.5a1 1 0 0 0 1.146 1.13l1.82-.288a1.534 1.534 0 1 1 .24 3.05h-.272c-.44 0-.865-.16-1.195-.451l-.338-.299A1 1 0 1 0 9.588 16l.338.299c.696.613 1.59.951 2.518.951h.271a3.534 3.534 0 1 0-.55-7.026l-.484.076.186-1.3h3.132a1 1 0 0 0 0-2.001zm7.707 5.294a1 1 0 1 0-1.414 1.414l.793.793-.793.793a1 1 0 0 0 1.414 1.414l.793-.793.793.793a1 1 0 1 0 1.414-1.414l-.793-.793.793-.793a1 1 0 0 0-1.414-1.414l-.793.793zM8.5 16.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMultiplier15x',
  mixins: [icon]
};
</script>
