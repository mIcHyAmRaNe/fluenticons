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
    <path :fill="fill" :fill-opacity="opacity" d="M22 11.5a1 1 0 1 0-2 0v.086l-3.043-3.043a1 1 0 1 0-1.414 1.414L18.586 13H18.5a1 1 0 1 0 0 2H21a1 1 0 0 0 1-1zm-5.596-8.072a1 1 0 0 0-1.332-1.332l-9.5 4.5a1 1 0 1 0 .856 1.808l2.417-1.145 2.396 2.396-1.145 2.417a1 1 0 1 0 1.808.856zM12.15 7.736 10.764 6.35l2.634-1.248zM15 18.5a1 1 0 1 0-2 0v.086L3.707 9.293a1 1 0 0 0-1.414 1.414L11.586 20H11.5a1 1 0 1 0 0 2H14a1 1 0 0 0 1-1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextDirectionRotate45Right',
  mixins: [icon]
};
</script>
