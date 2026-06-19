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
    <path :fill="fill" :fill-opacity="opacity" d="M9.807 4.508a2.58 2.58 0 0 0-1.639-.206l-1.182.226a2.85 2.85 0 0 0-2.004 1.5c-1.367 2.672-2.4 4.862-2.8 6.729-.41 1.926-.16 3.575 1.08 5.076.821.996 2.23.794 2.963-.036.56-.632 1.195-1.364 1.818-2.086a2.15 2.15 0 0 1 1.63-.749h1.51a6.503 6.503 0 0 1 10.226-3.655c-.523-1.532-1.362-3.269-2.39-5.28a2.85 2.85 0 0 0-2.004-1.5l-1.183-.225a2.58 2.58 0 0 0-1.639.206q-.215.107-.439.23a2.34 2.34 0 0 1-1.113.296h-1.282c-.376 0-.757-.104-1.113-.297a15 15 0 0 0-.44-.23M12 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2m11 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 13a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5m0 7.125a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledXboxControllerError',
  mixins: [icon]
};
</script>
