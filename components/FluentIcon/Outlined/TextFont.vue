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
    <path :fill="fill" :fill-opacity="opacity" d="M7 2a.75.75 0 0 1 .704.49l2.952 7.985.012.032.223.602-.829 2.086-.626-1.694H4.564l-1.112 3.01a.75.75 0 0 1-1.407-.521l1.288-3.483.012-.033L6.297 2.49A.75.75 0 0 1 7.001 2m-1.88 8h3.762L7 4.914zm8.687-3.527a.75.75 0 0 1 1.394 0l5.555 14.031h.494a.75.75 0 1 1 0 1.5H18.75a.75.75 0 1 1 0-1.5h.392l-1.19-3.004h-6.91L9.85 20.504h.399a.75.75 0 1 1 0 1.5H7.75a.75.75 0 1 1 0-1.5h.486zM17.359 16l-2.856-7.215L11.639 16z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextFont',
  mixins: [icon]
};
</script>
