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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H6.974l3.589-4.097c.944-1.078.258-2.738-1.11-2.891l1-1.777A1.5 1.5 0 0 0 9.144 11H4.317a1.5 1.5 0 0 0-.317.034V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM4.318 12h4.827a.5.5 0 0 1 .436.745L7.751 16h1.495a.75.75 0 0 1 .565 1.244l-4.824 5.508c-.505.576-1.443.085-1.258-.657L4.5 19H1.498a.5.5 0 0 1-.453-.713l2.82-6A.5.5 0 0 1 4.318 12" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentLightning',
  mixins: [icon]
};
</script>
