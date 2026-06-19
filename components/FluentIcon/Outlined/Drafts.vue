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
    <path :fill="fill" :fill-opacity="opacity" d="m20.878 2.826.153.144.145.153a3.58 3.58 0 0 1-.145 4.908L9.063 19.999a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999L15.97 2.97a3.58 3.58 0 0 1 4.908-.144M15.001 6.06l-9.938 9.938a.75.75 0 0 0-.193.333l-1.05 3.85 3.85-1.05a.75.75 0 0 0 .332-.194L17.94 9zM6.526 11l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm4-4-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm6.505-2.97-.97.97L19 7.94l.97-.97a2.078 2.078 0 1 0-2.939-2.94M14.526 3l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDrafts',
  mixins: [icon]
};
</script>
