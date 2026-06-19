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
    <path :fill="fill" :fill-opacity="opacity" d="M22.003 5.754a1.75 1.75 0 0 0-1.75-1.75h-7.248q-.13 0-.255.019v7.228h4.83l-.89-1.002a.75.75 0 1 1 1.121-.997l2 2.25a.75.75 0 0 1 0 .997l-2 2.25a.75.75 0 1 1-1.12-.997l.89-1.001H12.75v7.23q.125.018.255.018h7.248a1.75 1.75 0 0 0 1.75-1.75zm-10.752 5.497H6.42l.89-1.002a.75.75 0 1 0-1.12-.997l-2 2.25a.75.75 0 0 0 0 .997l2 2.25a.75.75 0 1 0 1.12-.997l-.89-1.001h4.83v7.229q-.12.017-.246.017H3.758a1.75 1.75 0 0 1-1.75-1.75V5.752c0-.967.783-1.75 1.75-1.75h7.247q.126 0 .246.017z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDualScreenSpan',
  mixins: [icon]
};
</script>
