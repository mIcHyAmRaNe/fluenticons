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
    <path :fill="fill" :fill-opacity="opacity" d="M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4.25 13A2.25 2.25 0 0 0 2 15.25v.278a2 2 0 0 0 .014.208 4.5 4.5 0 0 0 .778 2.07C3.61 18.974 5.172 20 8 20s4.39-1.025 5.208-2.195a4.5 4.5 0 0 0 .778-2.07 3 3 0 0 0 .014-.207v-.278A2.25 2.25 0 0 0 11.75 13zm-.75 2.507v-.257a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v.257l-.007.08a3 3 0 0 1-.514 1.358C11.486 17.65 10.422 18.5 8 18.5s-3.486-.85-3.98-1.555a3 3 0 0 1-.513-1.359zm14.692-1.512.476-1.205c.242-.614.92-.933 1.548-.728l.431.141c.724.237 1.326.806 1.35 1.569.1 3.11-2.476 7.583-5.213 9.055-.673.362-1.468.123-2.035-.391l-.337-.305a1.253 1.253 0 0 1-.142-1.706l.8-1.01c.29-.367.767-.53 1.22-.42l1.292.313q1.654-1.095 1.774-3.079l-.917-.964a1.2 1.2 0 0 1-.247-1.27" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPeopleCall',
  mixins: [icon]
};
</script>
