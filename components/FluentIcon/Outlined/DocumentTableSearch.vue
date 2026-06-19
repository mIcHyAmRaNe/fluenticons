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
    <path :fill="fill" :fill-opacity="opacity" d="M15.25 11.5c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 15.25 19h-4.775l-.05-.05c.368-.737.575-1.57.575-2.45 0-1.177-.37-2.268-1-3.163V13h-.257a5.5 5.5 0 0 0-1.672-1.363c.209-.088.438-.137.679-.137zM11.5 16v1.5h3.75a.25.25 0 0 0 .25-.25V16zm4-1.5v-1.25a.25.25 0 0 0-.25-.25H11.5v1.5zm2.5 6h-6.025l.512.513c.278.277.443.626.495.987H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828A2.1 2.1 0 0 0 12.172 2H6a2 2 0 0 0-2 2v7.207A5.5 5.5 0 0 1 5.5 11V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5m-.622-12H14a.5.5 0 0 1-.5-.5V4.621zM5.5 21a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentTableSearch',
  mixins: [icon]
};
</script>
