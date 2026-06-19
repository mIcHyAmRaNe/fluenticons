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
    <path :fill="fill" :fill-opacity="opacity" d="M12.61 2.287a.93.93 0 0 0-1.22 0 7.2 7.2 0 0 0-2.487 5.282.5.5 0 0 0 .278.449 9 9 0 0 1 1.7 1.146q.386.33.704.681c.22.242.61.242.83 0q.319-.351.704-.68a9 9 0 0 1 1.7-1.146.5.5 0 0 0 .279-.449 7.2 7.2 0 0 0-2.487-5.283M12 18.043a8.16 8.16 0 0 1 8.17-4.06c.488.064.853.5.815 1.004A7.596 7.596 0 0 1 13.41 22h-2.82a7.596 7.596 0 0 1-7.574-7.013.94.94 0 0 1 .815-1.004 8.16 8.16 0 0 1 8.17 4.06m7.646-5.113c-1.847-.102-3.654.38-5.126 1.165-.882.47-1.69 1.075-2.322 1.771a.27.27 0 0 1-.396 0c-.63-.697-1.439-1.301-2.321-1.771-1.469-.783-3.27-1.264-5.112-1.165-.73-1.15-1.23-2.47-1.35-3.8a.96.96 0 0 1 .874-1.04c2.455-.205 4.504.28 6.342 1.837.83.703 1.386 1.547 1.766 2.267.379-.72.936-1.564 1.765-2.267 1.84-1.558 3.903-2.042 6.356-1.837a.96.96 0 0 1 .875 1.04c-.121 1.33-.621 2.651-1.35 3.8" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFoodGrains',
  mixins: [icon]
};
</script>
