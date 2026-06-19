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
    <path :fill="fill" :fill-opacity="opacity" d="M10.75 3a.75.75 0 0 0 0 1.5h7.67L16.92 6h.02l-1.72 1.72a.75.75 0 0 0 1.06 1.06L18 7.06v.022l1.5-1.5v7.668a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-.75-.75zM3 20.318a1 1 0 0 1 0-.155zm.75.682a.747.747 0 0 1-.75-.75c0-.192.073-.384.22-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-.53.22m0 0h-.076a1 1 0 0 0 .174 0zm9.78-9.47a.75.75 0 1 0-1.06-1.06l-3.25 3.25a.75.75 0 1 0 1.06 1.06z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowUpRightDashes',
  mixins: [icon]
};
</script>
