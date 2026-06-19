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
    <path :fill="fill" :fill-opacity="opacity" d="M6 2a2 2 0 0 0-2 2v7.705l.882-.441q.299-.15.618-.213V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5h-6.114a2.5 2.5 0 0 1-1.268 1.489l-.022.011H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 12.172 2zm11.38 6.5H14a.5.5 0 0 1-.5-.5V4.62zM6.67 12.158l3.5 1.75A1.5 1.5 0 0 1 11 15.25v4.503a1.5 1.5 0 0 1-.83 1.342l-3.5 1.75a1.5 1.5 0 0 1-1.34 0l-3.5-1.75A1.5 1.5 0 0 1 1 19.753V15.25a1.5 1.5 0 0 1 .83-1.342l3.5-1.75a1.5 1.5 0 0 1 1.34 0m-3.446 2.895a.5.5 0 1 0-.448.894L5.5 17.31v3.19a.5.5 0 1 0 1 0v-3.19l2.724-1.363a.5.5 0 1 0-.448-.894L6 16.44z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentCube',
  mixins: [icon]
};
</script>
