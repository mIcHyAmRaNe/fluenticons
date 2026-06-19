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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2c5.523 0 10 4.477 10 10q0 .395-.03.78a6.5 6.5 0 0 0-1.474-1.05 8.5 8.5 0 1 0-15.923 4.407l.15.27-1.112 3.984 3.987-1.112.27.15a8.45 8.45 0 0 0 3.862 1.067c.281.54.636 1.036 1.05 1.474q-.385.03-.78.03a9.96 9.96 0 0 1-4.587-1.112l-3.826 1.067a1.25 1.25 0 0 1-1.54-1.54l1.068-3.823A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m11 15.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.646 2.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646h2.043A2.25 2.25 0 0 0 20 15.75v-.25a.5.5 0 0 1 1 0v.25A3.25 3.25 0 0 1 17.75 19h-2.043z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedChatArrowBackDown',
  mixins: [icon]
};
</script>
