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
    <path :fill="fill" :fill-opacity="opacity" d="M17.715 15.953A2.2 2.2 0 0 1 17.152 14h-10.9a2.25 2.25 0 0 0-2.248 2.249v.92c0 .572.178 1.13.51 1.596C6.056 20.929 8.58 22 12 22q.585 0 1.133-.042a2.25 2.25 0 0 1 .353-2.16l.8-1.01a2.2 2.2 0 0 1 2.238-.77l.838.203c.52-.437.83-.975.948-1.644zM12 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10m6.192 11.99.476-1.205c.242-.614.92-.933 1.548-.728l.431.141c.724.237 1.326.806 1.35 1.569.1 3.11-2.476 7.583-5.213 9.055-.673.362-1.468.123-2.035-.391l-.337-.305a1.253 1.253 0 0 1-.142-1.706l.8-1.01c.29-.367.767-.53 1.22-.42l1.292.313q1.654-1.095 1.774-3.079l-.917-.964a1.2 1.2 0 0 1-.247-1.27" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonCall',
  mixins: [icon]
};
</script>
