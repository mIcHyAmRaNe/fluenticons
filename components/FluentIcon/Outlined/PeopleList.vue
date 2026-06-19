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
    <path :fill="fill" :fill-opacity="opacity" d="M5.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4.25 14A2.25 2.25 0 0 0 2 16.25v.278a2 2 0 0 0 .014.208 4.5 4.5 0 0 0 .778 2.07C3.61 19.974 5.172 21 8 21c1.819 0 3.113-.424 4.024-1.037a1.74 1.74 0 0 1 .501-.963 1.74 1.74 0 0 1-.518-1.095l-.028.04C11.486 18.65 10.422 19.5 8 19.5s-3.486-.85-3.98-1.555a3 3 0 0 1-.513-1.358l-.007-.08v-.257a.75.75 0 0 1 .75-.75h7.5q.147.001.276.052a1.76 1.76 0 0 1 .402-1.448A2.3 2.3 0 0 0 11.75 14zm8.275 2.5-.027.027.002-.02v-.032zm1.225-2a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 2.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 2.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPeopleList',
  mixins: [icon]
};
</script>
