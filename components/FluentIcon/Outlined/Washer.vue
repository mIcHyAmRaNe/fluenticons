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
    <path :fill="fill" :fill-opacity="opacity" d="M12 8a5.25 5.25 0 1 0 0 10.5A5.25 5.25 0 0 0 12 8m-3.75 5.25a3.75 3.75 0 0 1 7.496-.186c-.177.17-.385.332-.688.463-.534.23-1.416.368-2.937-.012-1.697-.424-2.84-.172-3.64.324a3 3 0 0 0-.166.11 4 4 0 0 1-.065-.699m.75-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWasher',
  mixins: [icon]
};
</script>
