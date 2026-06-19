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
    <path :fill="fill" :fill-opacity="opacity" d="M2 6.25V8h6.129a.75.75 0 0 0 .53-.22l2.591-2.59-1.53-1.531A2.25 2.25 0 0 0 8.129 3H5.25A3.25 3.25 0 0 0 2 6.25m0 11.5V9.5h6.129a2.25 2.25 0 0 0 1.59-.659L13.062 5.5h5.689A3.25 3.25 0 0 1 22 8.75V15h-.022a5.5 5.5 0 1 0-5.478 6H5.25A3.25 3.25 0 0 1 2 17.75M16.5 21q.253 0 .5-.022V21zm0-1a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 16.5 20m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFolderSearch',
  mixins: [icon]
};
</script>
