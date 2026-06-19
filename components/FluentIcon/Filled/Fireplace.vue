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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2a9 9 0 0 0-9 9v6.25c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V11a9 9 0 0 0-9-9m-7.5 9a7.5 7.5 0 1 1 15 0v5.5h-4.303a4.16 4.16 0 0 0 1.303-3.014c0-1.727-.873-2.78-1.597-3.653l-.075-.091c-.74-.894-1.328-1.655-1.328-2.992a.75.75 0 0 0-.947-.724c-.95.26-1.473.872-1.746 1.556-.226.567-.282 1.2-.323 1.655l-.012.13a5 5 0 0 1-.063.495 3 3 0 0 1-.531-.26.75.75 0 0 0-.887.097l-.002.002-.003.002-.006.007-.019.017-.056.057a4 4 0 0 0-.177.199c-.14.17-.323.415-.505.733a5.57 5.57 0 0 0-.723 2.77c0 1.18.489 2.244 1.294 3.014H4.5zm-1.75 8.5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFireplace',
  mixins: [icon]
};
</script>
