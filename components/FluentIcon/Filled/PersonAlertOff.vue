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
    <path :fill="fill" :fill-opacity="opacity" d="M19.002 22c-.218.582-.808 1-1.5 1s-1.282-.418-1.5-1zm-6.282-9.28a.75.75 0 0 1 1.06 0l8.5 8.5a.75.75 0 0 1-1.06 1.06L19.94 21h-6.948c-.402 0-.604 0-.705-.048a.5.5 0 0 1-.241-.661c.047-.101.2-.231.508-.49l.948-.801v-3a4 4 0 0 1 .197-1.24l-.98-.98a.75.75 0 0 1 0-1.06M11.67 14c.085.176.197.342.343.487l.575.575q-.04.216-.06.437l-.007.066q-.008.088-.012.178l-.002.053q-.005.102-.006.204v2.535l-.611.516c-.139.117-.271.23-.373.325-.085.08-.269.253-.381.498a1.5 1.5 0 0 0 .77 2.004Q11.004 22 10 22c-3.42 0-5.943-1.072-7.485-3.236a2.75 2.75 0 0 1-.511-1.596v-.92A2.25 2.25 0 0 1 4.253 14zm5.832-2a4 4 0 0 1 4 4v2H21.5v1.025l-6.298-6.297a4 4 0 0 1 2.3-.728M10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonAlertOff',
  mixins: [icon]
};
</script>
