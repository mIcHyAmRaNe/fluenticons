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
    <path :fill="fill" :fill-opacity="opacity" d="M11.724 14.5a2.5 2.5 0 0 0-.224-.371V13h3.75a.25.25 0 0 1 .25.25v1.25zm.256 3V16h3.52v1.25a.25.25 0 0 1-.25.25zm0 1.5h3.27A1.75 1.75 0 0 0 17 17.25v-4a1.75 1.75 0 0 0-1.75-1.75h-6.5c-.418 0-.802.146-1.103.39l-.549-.274a2.5 2.5 0 0 0-2.236 0L4 12.049V4a2 2 0 0 1 2-2h6v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-7.432l.03-.015a2.5 2.5 0 0 0 1.382-2.237zM13.5 2.5V8a.5.5 0 0 0 .5.5h5.5zM.98 15.603v4.145a1.5 1.5 0 0 0 .83 1.342l3.5 1.75a1.5 1.5 0 0 0 1.341 0l3.5-1.75a1.5 1.5 0 0 0 .83-1.342v-4.146a1.5 1.5 0 0 0-.83-1.341l-3.5-1.75a1.5 1.5 0 0 0-1.341 0l-3.5 1.75a1.5 1.5 0 0 0-.83 1.342m1.777.77a.5.5 0 1 1 .447-.895l2.776 1.388 2.777-1.388a.5.5 0 1 1 .447.895L6.48 17.734v2.941a.5.5 0 0 1-1 0v-2.94z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentTableCube',
  mixins: [icon]
};
</script>
