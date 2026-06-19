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
    <path :fill="fill" :fill-opacity="opacity" d="M13.748 8.996a1.248 1.248 0 1 0 0-2.496 1.248 1.248 0 0 0 0 2.496M6.25 3A3.25 3.25 0 0 0 3 6.25v9a3.25 3.25 0 0 0 3.25 3.25h9a3.25 3.25 0 0 0 3.25-3.25v-9A3.25 3.25 0 0 0 15.25 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75v9c0 .231-.045.452-.126.654l-4.587-4.291a2.25 2.25 0 0 0-3.074 0l-4.587 4.29a1.8 1.8 0 0 1-.126-.653zm6.762 6.458 4.505 4.214q-.246.076-.517.078h-9q-.271 0-.517-.078l4.504-4.214a.75.75 0 0 1 1.025 0M8.75 21a3.25 3.25 0 0 1-2.74-1.5h9.74a3.75 3.75 0 0 0 3.75-3.75V6.011a3.25 3.25 0 0 1 1.5 2.74v7A5.25 5.25 0 0 1 15.75 21z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedImageMultiple',
  mixins: [icon]
};
</script>
