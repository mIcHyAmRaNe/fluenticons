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
    <path :fill="fill" :fill-opacity="opacity" d="M18 4.5c1.758 0 3.114.807 4.03 2.08l.177.26.038.067a.75.75 0 0 1-1.256.807l-.045-.063-.129-.19C20.153 6.536 19.228 6 18 6c-1.304 0-2.266.603-2.935 1.635-.62.957-.987 2.296-1.053 3.85a5 5 0 1 1 3.707 8.007l-.07-.003c-1.729-.104-3.027-.981-3.878-2.312-.884-1.384-1.271-3.23-1.271-5.177 0-1.955.412-3.8 1.307-5.18C14.72 5.407 16.134 4.5 18 4.5m-7.75.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V12.5H3v5.75a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 1.5 0V11h6.5V5.75a.75.75 0 0 1 .75-.75M18 11a3.5 3.5 0 0 0-.182 6.994L18 18a3.5 3.5 0 1 0 0-7" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextHeader6',
  mixins: [icon]
};
</script>
