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
    <path :fill="fill" :fill-opacity="opacity" d="M11.93 4.351c.305-.657 1.119-1.022 1.768-.768.782.304 1.089 1.26.673 1.908-.196.306-.493.61-.874.938-.233.201-.458.38-.693.566-.17.135-.347.275-.537.432-.415.342-.847.73-1.176 1.173-.336.453-.591 1-.591 1.65 0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.459l.005-.006c.215-.29.53-.584.926-.91.14-.115.3-.243.467-.376.264-.21.545-.434.788-.643.418-.36.844-.777 1.157-1.264.96-1.499.214-3.49-1.391-4.116-1.479-.576-3.078.251-3.674 1.536a.75.75 0 0 0 1.361.63M2.75 2a.75.75 0 0 1 .75.75V5.5h4V2.752a.75.75 0 0 1 1.5 0v7.492a.75.75 0 0 1-1.5 0V7h-4v3.25a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 2.75 2m14.807 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M2.75 19a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zM2 14.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextHeader2LinesCaret',
  mixins: [icon]
};
</script>
