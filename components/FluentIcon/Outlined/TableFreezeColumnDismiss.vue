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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.25-9A3.25 3.25 0 0 1 21 6.25v5.774a6.5 6.5 0 0 0-1.5-.71V10h-4v1.315a6.5 6.5 0 0 0-1.5.71V10h-4v4h2.024a6.5 6.5 0 0 0-.71 1.5H10v4h1.315a6.4 6.4 0 0 0 .71 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm2.104 12.147a.5.5 0 0 0-.707 0L17.5 16.793l-1.646-1.646a.5.5 0 1 0-.707.707l1.646 1.646-1.646 1.646a.5.5 0 1 0 .707.707l1.646-1.646 1.646 1.646a.5.5 0 1 0 .707-.707L18.208 17.5l1.646-1.646a.5.5 0 0 0 0-.707M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75H8.5v-15zm3.75 4h4v-4h-4zm5.5 0h4V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTableFreezeColumnDismiss',
  mixins: [icon]
};
</script>
