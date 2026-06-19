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
    <path :fill="fill" :fill-opacity="opacity" d="M10 12.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.763.763 0 0 1-.75-.75M12 16v-.75c0-.258-.04-.511-.115-.75h4.365a.75.75 0 0 1 0 1.5zm0 3v-1.5h4.25a.75.75 0 0 1 0 1.5zm-6.5-7.95q-.32.066-.618.214l-.882.44V4a2 2 0 0 1 2-2h6.172c.515 0 1.047.22 1.413.586l5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-7.404l.022-.011a2.5 2.5 0 0 0 1.268-1.489H18a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5zM17.378 8.5 13.5 4.621V8a.5.5 0 0 0 .5.5zm-7.207 5.408-3.5-1.75a1.5 1.5 0 0 0-1.342 0l-3.5 1.75A1.5 1.5 0 0 0 1 15.25v4.503a1.5 1.5 0 0 0 .83 1.342l3.5 1.75a1.5 1.5 0 0 0 1.34 0l3.5-1.75a1.5 1.5 0 0 0 .83-1.342V15.25a1.5 1.5 0 0 0-.83-1.342m-7.618 1.368a.5.5 0 0 1 .67-.223L6 16.44l2.776-1.388a.5.5 0 1 1 .448.894L6.5 17.31v3.19a.5.5 0 1 1-1 0v-3.19l-2.724-1.363a.5.5 0 0 1-.223-.67" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentBulletListCube',
  mixins: [icon]
};
</script>
