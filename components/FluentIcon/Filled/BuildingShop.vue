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
    <path :fill="fill" :fill-opacity="opacity" d="M10.495 14.501v7.498H7.5v-7.498zm6.76-1.5h-3.501a.75.75 0 0 0-.75.75v3.502c0 .414.335.75.75.75h3.501a.75.75 0 0 0 .75-.75v-3.502a.75.75 0 0 0-.75-.75m-.75 1.5v2.002h-2.002v-2.002zm-8.34-7.499H3.501v1.165c0 1.18.878 2.157 2.017 2.311l.156.016.16.005a2.33 2.33 0 0 0 2.327-2.173l.006-.16zm6.165 0H9.666v1.165c0 1.18.878 2.157 2.017 2.311l.156.016.16.005a2.33 2.33 0 0 0 2.327-2.173l.006-.16zm6.167 0h-4.665l.001 1.165c0 1.18.878 2.157 2.016 2.311l.157.016.16.005a2.333 2.333 0 0 0 2.327-2.173l.005-.16zM9.061 3.5H6.326L4.47 5.502h3.977zm4.308 0h-2.738l-.616 2.002h3.97zm4.304 0H14.94l.615 2.002h3.976zM2.202 5.742 5.45 2.24a.75.75 0 0 1 .446-.233L6 2h12a.75.75 0 0 1 .475.169l.075.07 3.273 3.53.03.038c.102.136.148.29.148.44l-.002 1.92c0 .994-.378 1.9-1 2.58V21.25a.75.75 0 0 1-.648.743l-.102.007-8.253-.001v-8.248a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v8.248L3.752 22a.75.75 0 0 1-.744-.648l-.006-.102L3 10.748a3.82 3.82 0 0 1-.995-2.384L2 8.167V6.29a.73.73 0 0 1 .096-.408l.05-.076z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBuildingShop',
  mixins: [icon]
};
</script>
