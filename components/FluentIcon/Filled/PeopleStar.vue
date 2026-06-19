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
    <path :fill="fill" :fill-opacity="opacity" d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6M4.25 13A2.25 2.25 0 0 0 2 15.25v.25S2 20 8 20c1.39 0 2.458-.241 3.278-.613A6.5 6.5 0 0 1 11 17.5c0-1.657.62-3.169 1.64-4.317a2.2 2.2 0 0 0-.89-.183zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-4.945-3.08a.577.577 0 0 0-1.11 0l-.557 1.788h-1.803c-.566 0-.8.754-.343 1.1l1.458 1.105-.557 1.787c-.175.561.441 1.028.899.681l1.458-1.104 1.458 1.104c.458.347 1.074-.12.899-.68l-.557-1.788 1.458-1.104c.458-.347.223-1.101-.343-1.101h-1.803z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPeopleStar',
  mixins: [icon]
};
</script>
