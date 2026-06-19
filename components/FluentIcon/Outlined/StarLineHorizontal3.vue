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
    <path :fill="fill" :fill-opacity="opacity" d="M13.209 3.102c-.495-1.003-1.926-1.003-2.421 0L8.43 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719-.9 5.25c-.19 1.104.968 1.945 1.959 1.424l5.064-2.663a.75.75 0 1 0-.698-1.327l-4.795 2.52.862-5.029a1.35 1.35 0 0 0-.388-1.194l-3.654-3.562 5.05-.734c.44-.064.82-.34 1.016-.739l2.258-4.575 2.489 5.043a.75.75 0 0 0 .673.418h6.09a.75.75 0 0 0 0-1.5h-5.624zM14.5 12.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedStarLineHorizontal3',
  mixins: [icon]
};
</script>
