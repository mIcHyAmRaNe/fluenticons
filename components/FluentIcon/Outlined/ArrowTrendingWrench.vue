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
    <path :fill="fill" :fill-opacity="opacity" d="M21 3.75a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h3.19L13 9.94l-2.22-2.22a.75.75 0 0 0-1.06 0l-6.5 6.5a.75.75 0 1 0 1.06 1.06l5.97-5.97 2.22 2.22a.75.75 0 0 0 1.06 0l5.97-5.97v3.19a.75.75 0 0 0 1.5 0zm-.52 8.083c.25-.25.165-.673-.181-.749a4.001 4.001 0 0 0-4.54 5.47l-3.741 3.742a1.5 1.5 0 0 0 2.121 2.121l3.742-3.741a4.001 4.001 0 0 0 5.47-4.54c-.076-.347-.499-.432-.75-.182L20.858 15.7a1.5 1.5 0 0 1-2.122-2.121z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowTrendingWrench',
  mixins: [icon]
};
</script>
