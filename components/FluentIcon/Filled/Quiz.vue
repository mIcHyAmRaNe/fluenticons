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
    <path :fill="fill" :fill-opacity="opacity" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm-11 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0-3.001a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM10 4.996a.75.75 0 0 0-.694.467l-2.25 5.502a.75.75 0 0 0 1.388.568l.424-1.036h2.262l.423 1.035a.75.75 0 0 0 1.388-.566l-2.247-5.503A.75.75 0 0 0 10 4.996m5.75 0a.75.75 0 0 0-.75.75v1.25h-1.25a.75.75 0 0 0 0 1.5H15v1.25a.75.75 0 0 0 1.5 0v-1.25h1.25a.75.75 0 0 0 0-1.5H16.5v-1.25a.75.75 0 0 0-.75-.75m-5.232 4.001H9.48L10 7.73z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledQuiz',
  mixins: [icon]
};
</script>
