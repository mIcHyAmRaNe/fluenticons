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
    <path :fill="fill" :fill-opacity="opacity" d="M11.022 7q.06.782.293 1.5H4.25a.75.75 0 0 0-.75.75V11h9.312a6.5 6.5 0 0 0 2.185 1.5H11v6.25A2.25 2.25 0 0 1 8.75 21h-4.5A2.25 2.25 0 0 1 2 18.75v-9.5A2.25 2.25 0 0 1 4.25 7zM19.5 20.25a.75.75 0 0 1-1.5 0v-7.271a6.5 6.5 0 0 0 1.5-.294zm-16-1.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V12.5h-6zm18.501-1a.75.75 0 0 1-1.499.036v-5.521a6.5 6.5 0 0 0 1.499-1.078zM7.25 14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5zM17.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m3.354 3.146a.5.5 0 0 0-.707 0L16.5 7.793l-1.646-1.647a.5.5 0 1 0-.707.708l2 2a.5.5 0 0 0 .707 0l4-4a.5.5 0 0 0 0-.708m-9.54.354q-.233.719-.293 1.5H4.629A2.25 2.25 0 0 1 6.75 4.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDeskMultipleCheckmark',
  mixins: [icon]
};
</script>
