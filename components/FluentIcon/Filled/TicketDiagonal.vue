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
    <path :fill="fill" :fill-opacity="opacity" d="M12.619 2.499a2.25 2.25 0 0 1 3.01.154l.993.992c.439.44.346 1.093-.015 1.45a1.626 1.626 0 1 0 2.296 2.297l.07-.064c.343-.286.889-.355 1.295-.028l.085.077.984.984.155.17a2.25 2.25 0 0 1 0 2.84l-.155.172-2.367 2.366-1.203-1.203a.75.75 0 0 0-1.06 1.06l1.203 1.203-6.365 6.367a2.25 2.25 0 0 1-3.011.154l-.171-.154-.984-.985c-.44-.44-.346-1.093.014-1.45l.107-.116a1.6 1.6 0 0 0 .375-1.035 1.626 1.626 0 0 0-2.778-1.144c-.357.36-1.01.452-1.45.014l-.992-.992a2.25 2.25 0 0 1 0-3.182L9.02 6.08l1.212 1.212a.75.75 0 0 0 1.06-1.06l-1.211-1.213 2.367-2.366zm1.148 6.207a.75.75 0 0 0-1.06 1.06l1.525 1.526a.75.75 0 0 0 1.06-1.06z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTicketDiagonal',
  mixins: [icon]
};
</script>
