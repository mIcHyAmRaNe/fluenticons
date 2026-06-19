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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M4.75 11a.75.75 0 0 1 .743.648l.007.102v.5a5.25 5.25 0 0 0 5.033 5.246l.217.004H11a6.5 6.5 0 0 0 .75 3.032v.718a.75.75 0 0 1-1.493.102l-.007-.102v-2.269a6.75 6.75 0 0 1-6.246-6.495L4 12.25v-.5a.75.75 0 0 1 .75-.75m9.75 7a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.55A3.5 3.5 0 0 0 17.5 21a3.5 3.5 0 0 0 2.675-1.243.5.5 0 1 0-.764-.646A2.5 2.5 0 0 1 17.5 20a2.5 2.5 0 0 1-2-1h1a.5.5 0 0 0 0-1zm6-4a.5.5 0 0 0-.5.5v.55A3.5 3.5 0 0 0 17.5 14a3.5 3.5 0 0 0-2.837 1.45.5.5 0 0 0 .81.586A2.5 2.5 0 0 1 17.5 15c.817 0 1.543.392 2 1h-1a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5M11 2a4 4 0 0 1 4 4v5.498a6.51 6.51 0 0 0-3.823 4.497L11 16a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMicSync',
  mixins: [icon]
};
</script>
