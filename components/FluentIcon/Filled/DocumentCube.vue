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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-7.404l.022-.011A2.5 2.5 0 0 0 12 19.753V15.25a2.5 2.5 0 0 0-1.382-2.236l-3.5-1.75a2.5 2.5 0 0 0-2.236 0l-.882.44V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-6.83 9.658 3.5 1.75A1.5 1.5 0 0 1 11 15.25v4.503a1.5 1.5 0 0 1-.83 1.342l-3.5 1.75a1.5 1.5 0 0 1-1.34 0l-3.5-1.75A1.5 1.5 0 0 1 1 19.753V15.25a1.5 1.5 0 0 1 .83-1.342l3.5-1.75a1.5 1.5 0 0 1 1.34 0m-3.446 2.895a.5.5 0 1 0-.448.894L5.5 17.31v3.19a.5.5 0 1 0 1 0v-3.19l2.724-1.363a.5.5 0 1 0-.448-.894L6 16.44z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentCube',
  mixins: [icon]
};
</script>
