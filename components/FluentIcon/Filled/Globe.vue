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
    <path :fill="fill" :fill-opacity="opacity" d="M8.904 16.5h6.192C14.476 19.773 13.235 22 12 22c-1.197 0-2.4-2.094-3.038-5.204zh6.192zm-5.838.001h4.306c.364 2.082.983 3.854 1.792 5.093a10.03 10.03 0 0 1-5.952-4.814zm13.563 0h4.305a10.03 10.03 0 0 1-6.097 5.093c.755-1.158 1.344-2.778 1.715-4.681zh4.305zm.302-6.5h4.87a10.05 10.05 0 0 1-.257 5H16.84a29 29 0 0 0 .13-4.344zh4.87zM2.2 10h4.87a28 28 0 0 0 .033 4.42l.057.58H2.456a10.05 10.05 0 0 1-.258-5m6.377 0h6.849a26 26 0 0 1-.037 4.425l-.062.575H8.674a26 26 0 0 1-.132-4.512zh6.849zm6.368-7.424-.108-.17A10.03 10.03 0 0 1 21.373 8.5h-4.59c-.316-2.416-.957-4.492-1.838-5.923l-.108-.17zm-5.902-.133.122-.037c-.88 1.351-1.535 3.33-1.883 5.654l-.062.44H2.63a10.03 10.03 0 0 1 6.413-6.057l.122-.037zM12 2.002c1.319 0 2.646 2.542 3.214 6.183l.047.315H8.739C9.28 4.691 10.644 2.002 12 2.002" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledGlobe',
  mixins: [icon]
};
</script>
