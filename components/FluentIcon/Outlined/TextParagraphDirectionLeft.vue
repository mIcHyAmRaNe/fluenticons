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
    <path :fill="fill" :fill-opacity="opacity" d="M8 8.5A5.5 5.5 0 0 1 13.5 3h6.545c.527 0 .955.336.955.75 0 .38-.36.693-.825.743l-.13.007H19.5v16.708c0 .437-.336.792-.75.792s-.75-.355-.75-.792V4.5h-1.5v16.708c0 .437-.336.792-.75.792s-.75-.355-.75-.792V14h-1.5A5.5 5.5 0 0 1 8 8.5m7-4h-1.5a4 4 0 0 0 0 8H15zM5.401 14.858a.668.668 0 0 0 .898-.984L4.585 12 6.3 10.126l.062-.077a.668.668 0 0 0-1.033-.84l-2.146 2.333-.065.081a.67.67 0 0 0 .065.835l2.146 2.333z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextParagraphDirectionLeft',
  mixins: [icon]
};
</script>
