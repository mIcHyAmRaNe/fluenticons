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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 3.75a.75.75 0 0 0-1.5 0v14.3a2.5 2.5 0 0 1 1.5.95v-7.5h2.25a.75.75 0 0 0 0-1.5H17.5zM3.75 5a.75.75 0 0 0 0 1.5h7.715c-.122 1.42-.58 3.458-1.591 5.237C8.682 13.83 6.774 15.5 3.75 15.5a.75.75 0 0 0 0 1.5c3.712 0 6.052-2.104 7.427-4.522C12.536 10.09 13 7.333 13 5.75a.75.75 0 0 0-.75-.75zM12 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextMore',
  mixins: [icon]
};
</script>
