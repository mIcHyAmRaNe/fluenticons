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
    <path :fill="fill" :fill-opacity="opacity" d="M13.5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M7 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M2 6.316c0-1.441 1.318-2.492 2.692-2.3C6.268 4.239 8.809 4.5 12 4.5s5.732-.262 7.308-.483C20.682 3.824 22 4.875 22 6.316v11.369c0 1.44-1.318 2.49-2.69 2.298A53 53 0 0 0 12 19.5c-3.19 0-5.732.262-7.309.483-1.373.192-2.69-.858-2.691-2.299zm2.483-.814c-.524-.073-.983.338-.983.814v11.369c0 .475.458.886.983.812q.244-.034.517-.069V16a1 1 0 0 1 1-1h2.5v3.104q.716-.044 1.5-.07V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3.033q.784.028 1.5.07V15H18a1 1 0 0 1 1 1v2.428q.273.035.517.07c.525.073.983-.338.983-.814V6.317c0-.476-.459-.887-.983-.814C17.884 5.732 15.272 6 12 6s-5.884-.269-7.517-.498" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedVideo360',
  mixins: [icon]
};
</script>
