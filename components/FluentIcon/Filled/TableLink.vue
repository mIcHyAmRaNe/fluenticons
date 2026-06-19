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
    <path :fill="fill" :fill-opacity="opacity" d="M9.5 21h2.066A4.7 4.7 0 0 1 11 18.75c0-1.025.325-1.974.877-2.75H9.5zM21 9.5v4.833A4.7 4.7 0 0 0 19.25 14H16V9.5zm-6.5 0v4.666a4.7 4.7 0 0 0-.874.334H9.5v-5zM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5zm-6.5-5h-5v5h5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zM3 9.5v5h5v-5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5zm16.25-1a3.75 3.75 0 0 1 .202 7.495l-.199.005v.005a.75.75 0 0 1-.108-1.493l.102-.007.003-.005a2.25 2.25 0 0 0 .154-4.495l-.154-.005a.75.75 0 0 1-.102-1.493zm-3.5 0a.75.75 0 0 1 .102 1.493l-.102.007a2.25 2.25 0 0 0-.154 4.495l.154.005a.75.75 0 0 1 .102 1.493l-.102.007a3.75 3.75 0 0 1-.2-7.495zm3.5 3a.75.75 0 0 1 .102 1.493l-.102.007h-3.5a.75.75 0 0 1-.102-1.493L15.75 18z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableLink',
  mixins: [icon]
};
</script>
