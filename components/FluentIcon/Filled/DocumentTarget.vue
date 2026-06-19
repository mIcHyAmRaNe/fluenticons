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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H8.682a5.02 5.02 0 0 0 2.503-2.75h.065a1.75 1.75 0 1 0 0-3.5h-.065a5 5 0 0 0-2.935-2.935v-.065a1.75 1.75 0 1 0-3.5 0v.065a5 5 0 0 0-.75.354V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM7.25 12.75a.75.75 0 0 0-1.5 0v.566a4.25 4.25 0 0 0-3.434 3.434H1.75a.75.75 0 0 0 0 1.5h.566a4.25 4.25 0 0 0 3.434 3.434v.566a.75.75 0 0 0 1.5 0v-.566a4.25 4.25 0 0 0 3.434-3.434h.566a.75.75 0 0 0 0-1.5h-.566a4.25 4.25 0 0 0-3.434-3.434zm-3.5 4.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m4 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentTarget',
  mixins: [icon]
};
</script>
