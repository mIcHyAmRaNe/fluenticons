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
    <path :fill="fill" :fill-opacity="opacity" d="M14 3.5v2h3.5v-2zm-1.5-.25c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.5C19 6.44 18.44 7 17.75 7h-4c-.69 0-1.25-.56-1.25-1.25zm3.25 5.25a.75.75 0 0 1 .75.75v6.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L15 15.94V9.25a.75.75 0 0 1 .75-.75M6.5 15v2H10v-2zM5 14.75c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25zM2.75 16a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 1.5 0v2a2.75 2.75 0 0 1-2.75 2.75H4.75A2.75 2.75 0 0 1 2 18.75v-2a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTrayItemAdd',
  mixins: [icon]
};
</script>
