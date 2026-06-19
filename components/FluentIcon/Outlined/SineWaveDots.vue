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
    <path :fill="fill" :fill-opacity="opacity" d="M8.608 1.98c.847 0 1.471.503 1.908 1.12.43.609.756 1.428 1.02 2.323.528 1.796.883 4.169 1.227 6.463.35 2.33.689 4.583 1.181 6.256.247.838.515 1.465.8 1.868.278.394.492.47.648.47.139 0 .313-.058.54-.329.238-.284.477-.741.706-1.384.455-1.283.79-3.067 1.101-5.037l.001-.01A2.997 2.997 0 0 1 19 8a3 3 0 0 1 .26 5.987c-.31 1.956-.66 3.866-1.17 5.296-.253.715-.568 1.37-.978 1.86-.421.502-.992.877-1.72.877-.847 0-1.471-.503-1.908-1.12-.43-.609-.755-1.428-1.02-2.323-.528-1.796-.883-4.169-1.227-6.463-.35-2.33-.689-4.583-1.181-6.256-.247-.839-.515-1.465-.8-1.868-.278-.394-.493-.47-.648-.47-.139 0-.313.058-.54.329-.238.284-.477.741-.706 1.384-.455 1.283-.79 3.067-1.101 5.038l-.002.008A2.998 2.998 0 0 1 5 16a3 3 0 0 1-.26-5.988c.308-1.956.66-3.865 1.17-5.295.253-.715.568-1.37.978-1.86.421-.502.992-.878 1.72-.878M5 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m14-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSineWaveDots',
  mixins: [icon]
};
</script>
