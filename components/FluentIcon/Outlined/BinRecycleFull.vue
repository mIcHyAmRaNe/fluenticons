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
    <path :fill="fill" :fill-opacity="opacity" d="M7.49 1c.399 0 .78.16 1.06.443L11 3.92V2.75c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75V5.5h1.372a.75.75 0 0 1 .746.83l-1.477 13.662A2.25 2.25 0 0 1 16.404 22H7.596a2.25 2.25 0 0 1-2.236-2.008L3.878 6.332a.75.75 0 0 1 .746-.831H6V2.49C6 1.667 6.667 1 7.49 1m9.01 4.5V2.75a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25V5.5zm-9-2.986V5.5h2.953zM6.85 19.83a.75.75 0 0 0 .746.669h8.808a.75.75 0 0 0 .745-.67L18.537 7H5.46zm4.942-9.422a.25.25 0 0 1 .416 0l.669 1a.75.75 0 0 0 1.246-.834l-.668-1a1.75 1.75 0 0 0-2.91 0l-.668 1a.75.75 0 0 0 1.246.834zM9.636 12.6a.75.75 0 0 1 .257 1.03l-.364.606a.5.5 0 0 0 .429.757h.792a.75.75 0 0 1 0 1.5h-.792c-1.555 0-2.515-1.696-1.715-3.029l.364-.607a.75.75 0 0 1 1.029-.257m4.473 1.029a.75.75 0 1 1 1.287-.771l.364.607c.798 1.333-.162 3.028-1.716 3.028h-.794a.75.75 0 0 1 0-1.5h.794a.5.5 0 0 0 .429-.757z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBinRecycleFull',
  mixins: [icon]
};
</script>
