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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 4A3.25 3.25 0 0 0 2 7.25v8.5A3.25 3.25 0 0 0 5.25 19h13.5A3.25 3.25 0 0 0 22 15.75v-8.5A3.25 3.25 0 0 0 18.75 4zM3.5 7.25c0-.966.784-1.75 1.75-1.75H8v1.208A2.5 2.5 0 0 0 4.708 10H3.5zM9.5 9a1 1 0 1 1 1 1h-1zM8 10H7a1 1 0 1 1 1-1zm0 2.56v4.94H5.25a1.75 1.75 0 0 1-1.75-1.75V11.5h3.44l-1.72 1.72a.75.75 0 1 0 1.06 1.06zm1.5 4.94v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-1.72-1.72h9.94v4.25a1.75 1.75 0 0 1-1.75 1.75zm0-10.792V5.5h9.25c.966 0 1.75.784 1.75 1.75V10h-7.708A2.5 2.5 0 0 0 9.5 6.708" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedGiftCard',
  mixins: [icon]
};
</script>
