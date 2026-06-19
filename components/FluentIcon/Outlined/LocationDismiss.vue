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
    <path :fill="fill" :fill-opacity="opacity" d="M5.843 4.56a8.707 8.707 0 0 1 12.514 12.106l-.2.207q-1.372 1.372-4.593 4.486a2.25 2.25 0 0 1-3.128 0l-3.85-3.749q-.426-.42-.743-.737a8.707 8.707 0 0 1 0-12.314m11.253 1.06A7.207 7.207 0 1 0 6.903 15.812L8.6 17.484q1.173 1.148 2.879 2.797a.75.75 0 0 0 1.042 0l2.975-2.89q.988-.966 1.6-1.579a7.207 7.207 0 0 0 0-10.192m-2.15 1.993.084.073a.75.75 0 0 1 .073.976l-.073.084-1.97 1.97 1.97 1.97a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-.976.073l-.085-.073L12 11.777l-1.969 1.97a.75.75 0 0 1-.976.072l-.085-.073a.75.75 0 0 1-.072-.976l.072-.084 1.97-1.97-1.97-1.97a.75.75 0 0 1-.072-.976l.072-.084a.75.75 0 0 1 .977-.073l.084.073L12 9.656l1.97-1.97a.75.75 0 0 1 .976-.073" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLocationDismiss',
  mixins: [icon]
};
</script>
