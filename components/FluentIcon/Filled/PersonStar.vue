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
    <path :fill="fill" :fill-opacity="opacity" d="M11 17.5a6.47 6.47 0 0 1 1.022-3.5h-6.77a2.25 2.25 0 0 0-2.248 2.248v.92c0 .572.178 1.13.51 1.596C5.056 20.928 7.58 22 11 22q.9 0 1.717-.099A6.48 6.48 0 0 1 11 17.5m0-15.496a5 5 0 1 1 0 10 5 5 0 0 1 0-10M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-4.945-3.08a.577.577 0 0 0-1.11 0l-.557 1.788h-1.803c-.566 0-.8.754-.343 1.1l1.458 1.105-.557 1.787c-.175.561.441 1.028.899.681l1.458-1.104 1.458 1.104c.458.347 1.074-.12.899-.68l-.557-1.788 1.458-1.104c.458-.347.223-1.101-.343-1.101h-1.803z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonStar',
  mixins: [icon]
};
</script>
