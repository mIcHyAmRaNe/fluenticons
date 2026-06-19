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
    <path :fill="fill" :fill-opacity="opacity" d="M10.25 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5m3.5-1.5h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h4.919a1.75 1.75 0 0 1-.016-1.465l1.55-3.463.03-.071 2.67-5.966a1.75 1.75 0 0 1 3.194 0L20 14.171V6.25A2.25 2.25 0 0 0 17.75 4h-1.764a2.25 2.25 0 0 0-2.236-2m3.935 9.444a.75.75 0 0 0-1.37 0l-2.677 5.985-.014.03-1.559 3.485a.75.75 0 1 0 1.37.612l1.367-3.056h4.396l1.367 3.056a.75.75 0 1 0 1.37-.612l-1.56-3.485-.013-.03zM17 13.587 18.527 17h-3.054z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledClipboardLetter',
  mixins: [icon]
};
</script>
