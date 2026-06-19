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
    <path :fill="fill" :fill-opacity="opacity" d="M7 12.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M7 18.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M4 5.06 2.22 3.28a.75.75 0 1 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06l-.916-.915A2 2 0 0 1 18 22H6a2 2 0 0 1-2-2zm14.5 14.501-1.534-1.534a.75.75 0 0 1-.716.973h-5.5a.75.75 0 0 1 0-1.5h5.5q.117 0 .223.034L14.939 16H10.75a.75.75 0 0 1 0-1.5h2.69l-1.5-1.5h-1.19a.75.75 0 0 1-.263-1.453L5.5 6.562V20a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5zM12 8c0 .492.178.942.473 1.29l.236.237c.349.295.8.473 1.291.473h4.5v5.318l1.5 1.5v-6.99a2 2 0 0 0-.586-1.414l-5.829-5.828A2.05 2.05 0 0 0 12.172 2H6q-.368.002-.694.124L6.682 3.5H12zm1.5-3.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zm2.75 6.879h-1.568l1.5 1.5h.068a.75.75 0 0 0 0-1.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentBulletListOff',
  mixins: [icon]
};
</script>
