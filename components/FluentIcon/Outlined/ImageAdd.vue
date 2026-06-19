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
    <path :fill="fill" :fill-opacity="opacity" d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M7 7l.001 2.504a.5.5 0 0 1-1 0V7H3.496a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm10.75-2.5h-5.063a6.5 6.5 0 0 0-.709-1.5h5.772A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75v-5.772c.463.297.967.536 1.5.709v5.063q.001.313.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702q.102-.28.104-.595V6.25a1.75 1.75 0 0 0-1.75-1.75m.58 14.901-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687q.274.097.582.099h11.5c.203 0 .399-.035.58-.099M15.253 6.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504m0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedImageAdd',
  mixins: [icon]
};
</script>
