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
    <path :fill="fill" :fill-opacity="opacity" d="m21.949 12.992-.198 1.037c-.185.971-1.092 1.623-2.12 1.524l-2.047-.198c-.892-.086-1.652-.72-1.878-1.566l-.632-2.355q-1.401-.575-3.09-.525a8.1 8.1 0 0 0-3.14.707l-.391 2.205c-.148.836-.838 1.459-1.711 1.547l-2.035.204c-1.015.102-1.988-.544-2.277-1.51l-.309-1.037c-.308-1.032-.033-2.118.721-2.851Q5.513 7.579 11.75 7.57q6.245-.007 9.185 2.588c.824.728 1.21 1.806 1.015 2.834" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCallEnd',
  mixins: [icon]
};
</script>
