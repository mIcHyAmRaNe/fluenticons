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
    <path :fill="fill" :fill-opacity="opacity" d="M9 5a3 3 0 1 1 6 0v4a3 3 0 0 1-2.25 2.906v2.783l3.47-3.47a.75.75 0 1 1 1.06 1.061l-4.53 4.53v1.44a.75.75 0 0 1-1.5 0v-1.44l-4.53-4.53a.75.75 0 1 1 1.06-1.06l3.47 3.47v-2.784A3 3 0 0 1 9 9zm-1.478 9.497c-.59.142-1.137.312-1.63.507-.799.314-1.495.707-2.005 1.182C3.377 16.662 3 17.274 3 18s.376 1.338.887 1.814c.51.474 1.206.867 2.004 1.182C7.492 21.626 9.652 22 12 22s4.508-.374 6.108-1.004c.799-.315 1.495-.708 2.005-1.182.51-.476.887-1.088.887-1.814s-.376-1.338-.887-1.814c-.51-.475-1.206-.868-2.005-1.182a12 12 0 0 0-1.63-.507l-1.269 1.269c.892.155 1.687.373 2.35.634.695.273 1.206.58 1.531.884.325.302.41.544.41.716s-.085.414-.41.716c-.325.303-.836.61-1.531.884-1.386.546-3.35.9-5.559.9s-4.173-.354-5.559-.9c-.695-.274-1.206-.58-1.532-.884-.324-.302-.409-.544-.409-.716s.085-.414.41-.716c.325-.303.836-.61 1.531-.884a12.2 12.2 0 0 1 2.35-.634z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPlantCattail',
  mixins: [icon]
};
</script>
