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
    <path :fill="fill" :fill-opacity="opacity" d="m16.613 8.79.094-.083L18.5 6.915l1.793 1.792a1 1 0 0 0 1.32.083l.094-.083a1 1 0 0 0 .083-1.32l-.083-.094L19.915 5.5l1.792-1.793a1 1 0 0 0 .083-1.32l-.083-.094a1 1 0 0 0-1.32-.083l-.094.083L18.5 4.085l-1.793-1.792a1 1 0 0 0-1.32-.083l-.094.083a1 1 0 0 0-.083 1.32l.083.094L17.085 5.5l-1.792 1.793a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.218.153zM18.5 21a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5H13V5.5A2.5 2.5 0 0 0 10.5 3h-5A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21zM5 11V5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V11zm6 8H5.5a.5.5 0 0 1-.5-.5V13h6zm7.5 0H13v-6h5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledUninstallApp',
  mixins: [icon]
};
</script>
