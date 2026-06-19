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
    <path :fill="fill" :fill-opacity="opacity" d="M21 8.5v4.11a3.2 3.2 0 0 1-.998-.377 4.6 4.6 0 0 1-.996-.803 1.39 1.39 0 0 0-2.009 0c-.84.874-1.69 1.237-2.596 1.237-.812 0-1.4.673-1.4 1.416v2.51l.004.282v.008c.039 1.146.3 2.192.81 3.105q.307.547.72 1.012H6.25A3.25 3.25 0 0 1 3 17.75V8.5zM18 12a.4.4 0 0 0-.282.122c-.994 1.036-2.094 1.545-3.317 1.545-.221 0-.4.186-.4.416v2.501l.004.266q.052 1.52.684 2.65.486.87 1.311 1.5.787.6 1.875.979c.082.028.17.028.253 0 2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.404.404 0 0 0-.392-.332q-.304 0-.6-.043a4.1 4.1 0 0 1-1.5-.526 5.6 5.6 0 0 1-1.216-.976.4.4 0 0 0-.286-.122m-.25-9A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCalendarShield',
  mixins: [icon]
};
</script>
