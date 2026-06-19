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
    <path :fill="fill" :fill-opacity="opacity" d="M12 3.5a8.5 8.5 0 0 0-6.016 14.505.75.75 0 0 1-1.061 1.06A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10q0 .487-.046.961a5.2 5.2 0 0 1-1.456-.777L20.5 12A8.5 8.5 0 0 0 12 3.5m1.056 10.767c.163-.584.655-.978 1.165-1.119a2.5 2.5 0 1 0-1.165 1.119m4.244-2.78a1.68 1.68 0 0 1 1.124-.486A6.502 6.502 0 0 0 5.5 12c0 1.796.73 3.423 1.906 4.598a.75.75 0 1 0 1.06-1.06 5 5 0 1 1 8.529-3.762q.174-.157.305-.289M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7.99.194c.652.651 1.907 1.686 3.449 1.899.308.042.561.285.561.589v2.838c0 3.816-3.58 5.201-4.353 5.456a.46.46 0 0 1-.293 0C17.58 22.721 14 21.336 14 17.52v-2.838c0-.304.253-.547.561-.59 1.542-.212 2.797-1.247 3.45-1.898a.714.714 0 0 1 .979 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCommunicationShield',
  mixins: [icon]
};
</script>
