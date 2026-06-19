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
    <path :fill="fill" :fill-opacity="opacity" d="M17 2a3 3 0 0 1 .157 5.995 2.5 2.5 0 0 1-.586 1.897L15.618 11h3.383l.14.004c.696.04 1.349.368 1.794.911.474.58.664 1.342.517 2.076l-1 5a2.5 2.5 0 0 1-4.902-.982l.4-2.009H15a6 6 0 1 1-6.675-5.962l1.569-1.835-.039-.024-.087.089a2.5 2.5 0 0 1-3.536-3.536l1.5-1.5a2.5 2.5 0 0 1 3.101-.347l3.17 1.998A3 3 0 0 1 17 2m-8 9.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m4.872 1c.428.595.752 1.27.94 2h2.97l-.762 3.804a1 1 0 0 0 1.96.392l1.001-5a1 1 0 0 0-.98-1.196zm-3.839-8.346a1 1 0 0 0-1.108.028l-.132.111-1.5 1.5a1 1 0 1 0 1.414 1.414l.935-.936 2.518 1.587-1.936 2.267c1.1.228 2.09.759 2.88 1.5l2.33-2.71a1.002 1.002 0 0 0-.225-1.499zM17 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWheelchairAccess',
  mixins: [icon]
};
</script>
