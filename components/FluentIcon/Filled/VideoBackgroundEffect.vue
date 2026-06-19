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
    <path :fill="fill" :fill-opacity="opacity" d="M6 16.938v2.121L5.059 20h-2.12zm16.002-2.503v2.122L18.56 20h-.566v-1.557zM8.75 14h6.495a1.75 1.75 0 0 1 1.744 1.607l.006.143V20H7v-4.25a1.75 1.75 0 0 1 1.606-1.744zm-.729-3.584c.06.579.243 1.12.523 1.6L2 18.56v-2.122zm13.98-.484v2.123l-4.007 4.01v-.315l-.004-.168a2.7 2.7 0 0 0-.387-1.247zM12.057 4 2 14.06v-2.121L9.936 4zm9.946 1.432v2.123l-5.667 5.67a2.7 2.7 0 0 0-.86-.216l-.23-.009h-.6a4 4 0 0 0 .855-1.062zM12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6M7.559 4l-5.56 5.56V7.438L5.439 4zm13.497 0L15.91 9.149a4 4 0 0 0-.652-1.47L18.935 4zm-4.498 0-2.543 2.544a4 4 0 0 0-1.6-.522L14.438 4z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoBackgroundEffect',
  mixins: [icon]
};
</script>
