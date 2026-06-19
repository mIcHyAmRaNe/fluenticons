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
    <path :fill="fill" :fill-opacity="opacity" d="M2 8V6.25A3.25 3.25 0 0 1 5.25 3h2.879a2.25 2.25 0 0 1 1.59.659l1.531 1.53L8.659 7.78a.75.75 0 0 1-.53.22zm0 1.5v8.25A3.25 3.25 0 0 0 5.25 21h10.721l.25-1h-1.724a1.5 1.5 0 0 1-1.357-2.138l2.82-6A1.5 1.5 0 0 1 17.317 11H22V8.75a3.25 3.25 0 0 0-3.25-3.25h-5.69L9.72 8.841a2.25 2.25 0 0 1-1.591.659zM17.318 12h4.827a.5.5 0 0 1 .436.745L20.751 16h1.495a.75.75 0 0 1 .565 1.244l-4.824 5.508c-.505.576-1.443.085-1.258-.657L17.5 19h-3.002a.5.5 0 0 1-.453-.713l2.82-6a.5.5 0 0 1 .453-.287" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFolderLightning',
  mixins: [icon]
};
</script>
