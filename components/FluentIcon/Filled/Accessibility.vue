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
    <path :fill="fill" :fill-opacity="opacity" d="M12 6.5A2.25 2.25 0 1 0 12 2a2.25 2.25 0 0 0 0 4.5M6.15 4.178a2.266 2.266 0 0 0-2.962 1.184A2.24 2.24 0 0 0 4.37 8.316L7.393 9.6a1 1 0 0 1 .61.92v3.04l-1.88 5.457a2.25 2.25 0 1 0 4.255 1.465l1.386-4.024a.25.25 0 0 1 .472 0l1.386 4.024a2.25 2.25 0 1 0 4.255-1.465l-1.875-5.457v-3.042a1 1 0 0 1 .61-.92l3.018-1.282a2.24 2.24 0 0 0 1.181-2.954 2.266 2.266 0 0 0-2.961-1.184l-1.606.682c-.34.144-.578.423-.695.73a3.794 3.794 0 0 1-7.098 0 1.28 1.28 0 0 0-.695-.73z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledAccessibility',
  mixins: [icon]
};
</script>
