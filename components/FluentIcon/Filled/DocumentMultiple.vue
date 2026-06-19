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
    <path :fill="fill" :fill-opacity="opacity" d="M4 4.25A2.25 2.25 0 0 1 6.25 2h4.254v4.748a2.25 2.25 0 0 0 2.25 2.25H17.5v8.252a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.25z" />
    <path :fill="fill" :fill-opacity="opacity" d="M12.004 6.748v-4.28q.115.087.218.191l4.619 4.619q.105.105.193.22h-4.28a.75.75 0 0 1-.75-.75M8.75 22a2.25 2.25 0 0 1-2.121-1.5h8.622a3.25 3.25 0 0 0 3.25-3.25V8.937l.84.84c.423.423.66.995.66 1.592v5.881A4.75 4.75 0 0 1 15.25 22z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentMultiple',
  mixins: [icon]
};
</script>
