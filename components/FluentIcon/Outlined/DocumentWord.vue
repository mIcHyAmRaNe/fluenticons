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
    <path :fill="fill" :fill-opacity="opacity" d="M10 11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zm2.172-9c.53 0 1.04.21 1.415.586l5.827 5.827c.375.375.586.885.586 1.415V20a2 2 0 0 1-2 2h-5.769c.371-.413.631-.928.727-1.5H18a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v6H4V4a2 2 0 0 1 2-2zM8.808 13.501 8.06 17.46l-.797-3.959H5.7l-.76 3.959-.767-3.959H2.9L4.142 19.5h1.56l.798-3.6.763 3.6 1.545-.001L10.1 13.5zM13.5 8a.5.5 0 0 0 .5.5h3.379L13.5 4.621z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentWord',
  mixins: [icon]
};
</script>
