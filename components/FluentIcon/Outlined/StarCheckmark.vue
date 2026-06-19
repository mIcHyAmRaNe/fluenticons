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
    <path :fill="fill" :fill-opacity="opacity" d="M13.209 3.103c-.495-1.003-1.926-1.003-2.421 0L8.43 7.881l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719-.9 5.25c-.19 1.104.968 1.945 1.959 1.424l3.958-2.081a6.5 6.5 0 0 1-.238-1.57l-4.15 2.182.863-5.03a1.35 1.35 0 0 0-.388-1.194l-3.654-3.562 5.05-.734c.44-.064.82-.34 1.016-.739l2.258-4.575 2.259 4.575a1.35 1.35 0 0 0 1.016.739l5.05.734-1.157 1.128c.536.142 1.044.35 1.517.616l.905-.882c.8-.781.359-2.142-.748-2.303l-5.273-.766zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedStarCheckmark',
  mixins: [icon]
};
</script>
