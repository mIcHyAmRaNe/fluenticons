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
    <path :fill="fill" :fill-opacity="opacity" d="M7.75 5A3.25 3.25 0 0 0 4.5 8.25v5.5A3.25 3.25 0 0 0 7.75 17h5A3.25 3.25 0 0 0 16 13.75v-5.5A3.25 3.25 0 0 0 12.75 5zM3.507 8.007q-.007.12-.007.243v5.5A4.25 4.25 0 0 0 7.75 18h5q.123 0 .244-.007A3.25 3.25 0 0 1 10.25 19.5h-2.5A5.75 5.75 0 0 1 2 13.75v-3c0-1.153.6-2.166 1.507-2.743m18.495-.254c0-1.416-1.594-2.246-2.754-1.434L17 7.893v6.214l2.248 1.574c1.16.812 2.754-.018 2.754-1.434z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoMultiple',
  mixins: [icon]
};
</script>
