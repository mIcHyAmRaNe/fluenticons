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
    <path :fill="fill" :fill-opacity="opacity" d="M18.75 15A2.25 2.25 0 0 1 21 17.25v2.5A2.25 2.25 0 0 1 18.75 22H5.25A2.25 2.25 0 0 1 3 19.75v-2.5A2.25 2.25 0 0 1 5.25 15zm-13.5 1.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75zm9.5-14a.75.75 0 0 1 .75.75V6.5h1.25a.75.75 0 0 1 0 1.5H15.5v4.25a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75m-3.003 1a.75.75 0 0 1 .75.75c0 2.892-1.389 4.833-2.754 6.03a9.7 9.7 0 0 1-2.484 1.575c-.133.056-.222.089-.251.1l-.005.001-.003.001a.75.75 0 0 1-.499-1.414h-.002l.006-.002c.018-.007.076-.028.165-.066a8.2 8.2 0 0 0 2.084-1.323C9.762 8.267 10.75 6.936 10.956 5H6.75a.75.75 0 0 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextColor',
  mixins: [icon]
};
</script>
