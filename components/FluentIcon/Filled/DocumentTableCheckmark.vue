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
    <path :fill="fill" :fill-opacity="opacity" d="M15.5 17.25V16h-2.674q.172.724.174 1.5h2.25a.25.25 0 0 0 .25-.25m0-2.75h-3.232a6.5 6.5 0 0 0-.768-1.154V13h3.75a.25.25 0 0 1 .25.25zm-9-3.5a6.5 6.5 0 0 1 2.504.5h6.246c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 15.25 19h-2.424a6.5 6.5 0 0 1-1.636 3H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2V2H6a2 2 0 0 0-2 2v7.498A6.5 6.5 0 0 1 6.5 11m7-3V2.5l6 6H14a.5.5 0 0 1-.5-.5M12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L5.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentTableCheckmark',
  mixins: [icon]
};
</script>
