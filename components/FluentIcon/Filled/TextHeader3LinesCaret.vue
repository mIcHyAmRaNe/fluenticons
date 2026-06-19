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
    <path :fill="fill" :fill-opacity="opacity" d="M11.994 4.345c.466-.519 1.314-.7 1.834-.533.316.1.526.315.617.535a.68.68 0 0 1-.076.666c-.28.417-.741.482-1.47.489h-.133a1 1 0 1 0 0 2h.133c.729.007 1.19.072 1.47.49a.68.68 0 0 1 .076.665.98.98 0 0 1-.617.536c-.52.166-1.368-.015-1.834-.534a1 1 0 0 0-1.488 1.337c1.002 1.116 2.676 1.503 3.931 1.101 1.677-.536 2.739-2.516 1.591-4.222a3 3 0 0 0-.295-.373q.156-.166.295-.373c1.148-1.706.086-3.686-1.59-4.222-1.256-.402-2.93-.015-3.932 1.102a1 1 0 0 0 1.488 1.336M3 2a1 1 0 0 1 1 1v2.5h3V3.002a1 1 0 0 1 2 0v6.993a1 1 0 1 1-2 0V7.5H4V10a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m14.557 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M2 20a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextHeader3LinesCaret',
  mixins: [icon]
};
</script>
