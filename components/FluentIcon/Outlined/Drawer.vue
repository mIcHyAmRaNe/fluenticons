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
    <path :fill="fill" :fill-opacity="opacity" d="M10.25 16.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM8.07 3a2 2 0 0 0-1.664.89l-2.07 3.106A2 2 0 0 0 4 8.106V11a1 1 0 0 0 1 1h.357L4.5 14A1.5 1.5 0 0 0 3 15.5v4A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5l-.857-2H19a1 1 0 0 0 1-1V8.106a2 2 0 0 0-.336-1.11l-2.07-3.105A2 2 0 0 0 15.93 3zM18 10.5l-.857-2H18.5v2zm-2.49-2 2.337 5.451-.024.049H6.177l-.024-.049L8.489 8.5zM17.865 7H6.136l1.518-2.277A.5.5 0 0 1 8.07 4.5h7.86a.5.5 0 0 1 .416.223zM6.857 8.5 6 10.5h-.5v-2zm-2.357 7h15v4h-15z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDrawer',
  mixins: [icon]
};
</script>
