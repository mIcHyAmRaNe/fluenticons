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
    <path :fill="fill" :fill-opacity="opacity" d="M19.207 4.293a1 1 0 1 0-1.414 1.414l.801.802c-3.809.161-6.169 2.59-8.226 4.706l-.085.088C8.057 13.593 6.147 15.5 3 15.5a1 1 0 1 0 0 2c4.05 0 6.503-2.525 8.632-4.715l.085-.088c2.124-2.184 3.96-4.02 6.857-4.185l-.781.78a1 1 0 0 0 1.414 1.415l2.5-2.5a1 1 0 0 0 0-1.414zM3 6.5c3.229 0 5.443 1.605 7.287 3.366q-.295.3-.574.588l-.147.152q-.349.36-.68.693C7.186 9.68 5.476 8.5 3 8.5a1 1 0 1 1 0-2m15.594 10.991c-3.01-.128-5.115-1.671-6.881-3.357q.295-.3.574-.589l.147-.151q.349-.36.68-.693c1.601 1.524 3.21 2.66 5.46 2.787l-.781-.78a1 1 0 0 1 1.414-1.415l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowShuffle',
  mixins: [icon]
};
</script>
