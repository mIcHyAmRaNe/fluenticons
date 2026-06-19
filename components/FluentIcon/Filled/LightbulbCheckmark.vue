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
    <path :fill="fill" :fill-opacity="opacity" d="M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708M17.5 13q.36 0 .71-.038-.658 1.11-1.725 2.13a.25.25 0 0 0-.071.125l-.528 2.283H8.114l-.526-2.283a.25.25 0 0 0-.071-.125c-1.83-1.747-2.767-3.704-2.767-5.84a7.25 7.25 0 0 1 8.02-7.21A6.5 6.5 0 0 0 17.5 13m-1.962 6-.29 1.258a2.25 2.25 0 0 1-2.02 1.736l-.173.006h-2.111a2.25 2.25 0 0 1-2.147-1.576l-.046-.168L8.461 19z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLightbulbCheckmark',
  mixins: [icon]
};
</script>
