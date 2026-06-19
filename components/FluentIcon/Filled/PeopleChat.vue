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
    <path :fill="fill" :fill-opacity="opacity" d="M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m8 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0M2 15.25A2.25 2.25 0 0 1 4.25 13h7.5c.316 0 .617.065.89.183A6.48 6.48 0 0 0 11 17.5a6.5 6.5 0 0 0 .278 1.887C10.458 19.76 9.39 20 8 20c-6 0-6-4.5-6-4.5zm15.501 7.752a5.501 5.501 0 1 0-4.812-2.833l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666c.79.439 1.7.688 2.667.688m-2-6a.5.5 0 1 1 0-1.001h4a.5.5 0 1 1 0 1zm2 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPeopleChat',
  mixins: [icon]
};
</script>
