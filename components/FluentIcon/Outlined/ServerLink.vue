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
    <path :fill="fill" :fill-opacity="opacity" d="M9.25 6a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM8.5 17.75a.75.75 0 0 1 .75-.75h2.083a4.7 4.7 0 0 0-.326 1.5H9.25a.75.75 0 0 1-.75-.75m3.786-2.25a4.74 4.74 0 0 1 2.744-1.446.8.8 0 0 0-.28-.054h-5.5a.75.75 0 0 0 0 1.5zM16.5 5v9H18V5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h3.286a4.8 4.8 0 0 1-.953-1.5H9A1.5 1.5 0 0 1 7.5 19V5A1.5 1.5 0 0 1 9 3.5h6A1.5 1.5 0 0 1 16.5 5M23 18.75A3.75 3.75 0 0 0 19.25 15l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 19.25 21l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V22.5l.2-.005A3.75 3.75 0 0 0 23 18.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 21l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007A.75.75 0 0 0 20 18.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedServerLink',
  mixins: [icon]
};
</script>
