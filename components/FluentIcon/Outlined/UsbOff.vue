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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-7.069-7.068-.358.342c-.347.33-.543.788-.543 1.267v1.825a2 2 0 1 1-1.509.003 1.75 1.75 0 0 0-.534-1.095l-3.698-3.522a3.25 3.25 0 0 1-1.01-2.353v-.85a1.748 1.748 0 0 1 .075-3.194L2.22 3.28a.75.75 0 0 1 0-1.06m6.143 7.204a1.76 1.76 0 0 1-.863.905v.85c0 .479.196.937.543 1.267L11.25 15.5v-3.19zM18.25 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75H18v.679c0 .89-.365 1.74-1.009 2.353l-1.167 1.11-1.06-1.06 1.193-1.136c.347-.33.543-.788.543-1.267V8.5h-.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75zm-6.886-3.147a.75.75 0 0 1 1.272 0l1.249 1.995a.75.75 0 0 1-.636 1.147h-.5v4.573l-1.5-1.5V4.995h-.498a.75.75 0 0 1-.636-1.147z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedUsbOff',
  mixins: [icon]
};
</script>
