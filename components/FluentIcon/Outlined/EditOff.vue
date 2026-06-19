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
    <path :fill="fill" :fill-opacity="opacity" d="M8.94 10 2.22 3.28a.75.75 0 1 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06L14 15.061l-4.998 5a3.1 3.1 0 0 1-1.477.825L2.924 21.98a.75.75 0 0 1-.904-.903l1.096-4.602c.133-.559.419-1.07.825-1.476zm4 4L10 11.062l-4.998 5c-.21.21-.358.474-.427.763l-.813 3.415 3.416-.813c.289-.069.553-.216.763-.426zm5-5-2.88 2.88 1.061 1.06 4.831-4.831a3.578 3.578 0 0 0-5.06-5.06l-4.831 4.83 1.06 1.06L15 6.062zm-.988-4.891a2.078 2.078 0 1 1 2.94 2.939L19 7.939 16.06 5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedEditOff',
  mixins: [icon]
};
</script>
