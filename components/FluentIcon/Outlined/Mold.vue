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
    <path :fill="fill" :fill-opacity="opacity" d="M16.25 2.25a.75.75 0 0 0-1.5 0v1.824A4.4 4.4 0 0 0 12.421 5.3l-.78.78-1.36-1.36A.75.75 0 1 0 9.22 5.78l1.36 1.361-3.439 3.44-1.36-1.361a.75.75 0 0 0-1.061 1.06l1.36 1.361-.777.778a4.4 4.4 0 0 0-1.227 2.331H2.25a.75.75 0 0 0 0 1.5h1.805c.104.662.357 1.305.76 1.874L3.22 19.72a.75.75 0 1 0 1.06 1.06l1.596-1.595a4.4 4.4 0 0 0 1.874.762v1.803a.75.75 0 0 0 1.5 0v-1.823a4.4 4.4 0 0 0 2.334-1.227l.777-.778 1.359 1.358a.75.75 0 1 0 1.06-1.06l-1.358-1.358 3.44-3.44 1.358 1.358a.75.75 0 1 0 1.06-1.06l-1.358-1.359.78-.78A4.4 4.4 0 0 0 19.93 9.25h1.821a.75.75 0 0 0 0-1.5h-1.8a4.4 4.4 0 0 0-.763-1.876L20.78 4.28a.75.75 0 0 0-1.06-1.06l-1.594 1.594a4.4 4.4 0 0 0-1.876-.761zM6.363 13.48l7.119-7.119a2.941 2.941 0 0 1 4.16 4.16l-7.12 7.118a2.941 2.941 0 1 1-4.159-4.16M9.5 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMold',
  mixins: [icon]
};
</script>
