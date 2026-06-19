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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.702.702A3.24 3.24 0 0 0 2 6.25v11.5A3.25 3.25 0 0 0 5.25 21h13.5a3.2 3.2 0 0 0 1.024-.165l.945.945a.75.75 0 0 0 1.061-1.06zM18.44 19.5H5.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.468.184-.893.483-1.207L9 10.061v4.69a1 1 0 0 0 1.482.875l2.635-1.449zm-5.57-9.812 2.924 2.923a1.002 1.002 0 0 0-.311-1.487zM20.5 6.25v11.068l1.364 1.364q.135-.444.136-.932V6.25A3.25 3.25 0 0 0 18.75 3H6.182l1.5 1.5H18.75c.966 0 1.75.784 1.75 1.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedVideoClipOff',
  mixins: [icon]
};
</script>
