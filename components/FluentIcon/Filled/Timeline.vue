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
    <path :fill="fill" :fill-opacity="opacity" d="M15.25 13c.967 0 1.75.784 1.75 1.75v4.504a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.254V14.75c0-.966.784-1.75 1.75-1.75zm5.751 1.896v5.354a.75.75 0 0 1-1.494.102l-.007-.102v-5.343a3 3 0 0 0 1.501-.011m-.75-4.804a1.908 1.908 0 1 1 0 3.816 1.908 1.908 0 0 1 0-3.816m-5.005-7.095c.967 0 1.75.784 1.75 1.75V9.25a1.75 1.75 0 0 1-1.75 1.75h-11.5a1.75 1.75 0 0 1-1.75-1.75V4.747a1.75 1.75 0 0 1 1.607-1.744l.143-.006zM20.251 3a.75.75 0 0 1 .743.649l.007.101v5.346a3 3 0 0 0-1.5-.01V3.75a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTimeline',
  mixins: [icon]
};
</script>
