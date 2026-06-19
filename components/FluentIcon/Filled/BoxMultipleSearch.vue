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
    <path :fill="fill" :fill-opacity="opacity" d="M13.7 2.33a3.75 3.75 0 0 1 2.6 0l4.307 1.592a1.75 1.75 0 0 1 1.143 1.641v9.292a5.5 5.5 0 0 0-5.63-3.843 2.75 2.75 0 0 0-1.167-.829l-4.306-1.592a4.75 4.75 0 0 0-2.397-.235V5.563a1.75 1.75 0 0 1 1.143-1.641zm-2.395 3.924a.75.75 0 0 0 .464.954l2.659.919c.37.128.774.128 1.144 0l2.65-.919a.75.75 0 0 0-.49-1.417l-2.65.918a.25.25 0 0 1-.164 0l-2.659-.919a.75.75 0 0 0-.954.464m3.566 4.99a2 2 0 0 0-.264-.123L10.3 9.529a3.75 3.75 0 0 0-2.6 0l-4.307 1.592a1.75 1.75 0 0 0-1.143 1.641v5.67a1.75 1.75 0 0 0 1.143 1.642L7.7 21.666a3.75 3.75 0 0 0 2.6 0l2.639-.976A5.49 5.49 0 0 1 11 16.5c0-.512.07-1.007.2-1.478l-1.45.503v2.7a.75.75 0 0 1-1.5 0v-2.7l-2.48-.857a.75.75 0 0 1 .49-1.418l2.74.948 2.732-.947a.76.76 0 0 1 .355-.034 5.5 5.5 0 0 1 2.784-1.972m5.297 7.862a4.5 4.5 0 1 0-1.06 1.06l2.612 2.613a.75.75 0 0 0 1.06-1.06zM19.5 16.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBoxMultipleSearch',
  mixins: [icon]
};
</script>
