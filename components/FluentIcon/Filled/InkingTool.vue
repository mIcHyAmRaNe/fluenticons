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
    <path :fill="fill" :fill-opacity="opacity" d="M13.82 20.04q-.183.684-.563 1.275a1.5 1.5 0 0 1-2.467.079l-.082-.122-.124-.218a4.8 4.8 0 0 1-.393-1.014 5.6 5.6 0 0 1-.156-2.04h3.93q.111 1.082-.145 2.04M18.477 9l-3.465 7.085a1.75 1.75 0 0 1-1.096.915h-3.737l-.107-.03a1.74 1.74 0 0 1-.908-.72l-.085-.151L5.537 9zm1.773-7.002a.75.75 0 0 1 .743.648l.007.102v3.5a1.75 1.75 0 0 1-1.607 1.744l-.143.006H4.752a1.75 1.75 0 0 1-1.744-1.606l-.006-.144v-3.5a.75.75 0 0 1 .648-.743l.102-.007z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledInkingTool',
  mixins: [icon]
};
</script>
