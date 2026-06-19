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
    <path :fill="fill" :fill-opacity="opacity" d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h9.398c-.274-.72-.17-1.56.338-2.201l.8-1.01a2.2 2.2 0 0 1 2.238-.77l.838.203c.52-.437.83-.975.948-1.644l-.595-.625a2.2 2.2 0 0 1-.453-2.328l.476-1.204a2.245 2.245 0 0 1 2.787-1.31l.43.14.045.016V6.75A2.75 2.75 0 0 0 19.25 4zM6 8.75A.75.75 0 0 1 6.75 8h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 6 8.75m0 3a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m.75 3.75a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5zm12.442-3.505.476-1.205c.242-.614.92-.933 1.548-.728l.431.141c.724.237 1.326.806 1.35 1.569.1 3.11-2.476 7.583-5.213 9.055-.673.362-1.468.123-2.035-.391l-.337-.305a1.253 1.253 0 0 1-.142-1.706l.8-1.01c.29-.367.767-.53 1.22-.42l1.292.313q1.654-1.095 1.774-3.079l-.917-.964a1.2 1.2 0 0 1-.247-1.27" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSlideTextCall',
  mixins: [icon]
};
</script>
