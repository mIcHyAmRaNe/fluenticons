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
    <path :fill="fill" :fill-opacity="opacity" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v6.704a6.8 6.8 0 0 0-1.5-1.122V8.5h-15v9.25c0 .966.784 1.75 1.75 1.75H9.5v.25c0 .49.201.932.525 1.25H6.25A3.25 3.25 0 0 1 3 17.75zm13.25 7.25c-.444 0-.87.068-1.271.193a.75.75 0 0 1-.449-1.431 5.75 5.75 0 0 1 6.697 2.608.75.75 0 0 1-1.297.752 4.25 4.25 0 0 0-3.68-2.122m-3.553.653a.75.75 0 0 1 .15 1.05A4.23 4.23 0 0 0 12 17.75v2a.75.75 0 0 1-1.5 0v-2c0-1.292.427-2.486 1.147-3.446a.75.75 0 0 1 1.05-.15M21.25 17a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-6.715.4a1.75 1.75 0 0 1 3.465.35v4a.75.75 0 0 0 1.5 0v-4a3.25 3.25 0 0 0-6.435-.648.75.75 0 1 0 1.47.298m-.035 2.35a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2.5-2a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWindowFingerprint',
  mixins: [icon]
};
</script>
