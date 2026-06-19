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
    <path :fill="fill" :fill-opacity="opacity" d="M21.246 4.504a.75.75 0 0 0-.743.648l-.007.102v13.499a.75.75 0 0 0 1.493.101l.007-.101v-13.5a.75.75 0 0 0-.75-.75M8.786 6.387l-.083-.094a1 1 0 0 0-1.32-.083l-.094.083-4.997 4.998a1 1 0 0 0-.083 1.32l.083.093 4.997 5.004a1 1 0 0 0 1.498-1.32l-.083-.094L5.415 13h12.581a1 1 0 0 0 .993-.883l.007-.117a1 1 0 0 0-.883-.993L17.996 11H5.412l3.291-3.293a1 1 0 0 0 .083-1.32l-.083-.094z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowExportRtl',
  mixins: [icon]
};
</script>
