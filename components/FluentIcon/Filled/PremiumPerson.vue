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
    <path :fill="fill" :fill-opacity="opacity" d="M18.832 3.445A1 1 0 0 0 18 3H6l-.125.008a1 1 0 0 0-.77.545l-3 6-.052.125a1 1 0 0 0 .204.991l8.982 9.983a.98.98 0 0 0 .532.322l.112.02a1.01 1.01 0 0 0 .887-.352l.26-.29a4 4 0 0 1-.03-.477v-.103A2.77 2.77 0 0 1 15.774 17h.274l.002-.002a3.5 3.5 0 0 1 4.678-5.199l1.016-1.13.084-.107a1 1 0 0 0 .067-1.01l-3-6zM9.423 11h5.153L12 17.342zm-4.177 0h2.018l1.66 4.087zm1.372-6h2.004l-1.3 4H4.618zm4.108 0h2.547l1.299 4H9.427zm4.651 0h2.004l2 4h-2.704zM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPremiumPerson',
  mixins: [icon]
};
</script>
