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
    <path :fill="fill" :fill-opacity="opacity" d="M4.93 4.929a1 1 0 0 1 1.415 1.414 8 8 0 0 0 0 11.313 1 1 0 0 1-1.414 1.415c-3.906-3.905-3.906-10.237 0-14.142m12.728 0a1 1 0 0 1 1.414 0c3.906 3.905 3.906 10.237 0 14.142a1 1 0 0 1-1.414-1.415 8 8 0 0 0 0-11.313 1 1 0 0 1 0-1.414m-9.9 2.828A1 1 0 0 1 9.174 9.17a4 4 0 0 0 0 5.657 1 1 0 0 1-1.414 1.414 6 6 0 0 1 0-8.485m7.071 0a1 1 0 0 1 1.414 0 6 6 0 0 1 0 8.485 1 1 0 0 1-1.414-1.414 4 4 0 0 0 0-5.657 1 1 0 0 1 0-1.414M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLive',
  mixins: [icon]
};
</script>
