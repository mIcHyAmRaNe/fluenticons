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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4zM3.5 7.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75zm4.404 2.527C8.978 9.29 10.427 9 12 9s3.022.289 4.096.777C17.125 10.245 18 10.993 18 12v1.503a1.5 1.5 0 0 1-1.625 1.495l-1.177-.098a1.5 1.5 0 0 1-1.342-1.181l-.283-1.325a.3.3 0 0 0-.036-.097l-.013-.016C13.322 12.176 12.858 12 12 12s-1.322.176-1.524.281l-.002.002-.011.014a.3.3 0 0 0-.036.096l-.283 1.326a1.5 1.5 0 0 1-1.342 1.18l-1.177.099A1.5 1.5 0 0 1 6 13.503V12c0-1.007.875-1.755 1.904-2.223" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCallRectangleLandscape',
  mixins: [icon]
};
</script>
