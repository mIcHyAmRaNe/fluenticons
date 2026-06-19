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
    <path :fill="fill" :fill-opacity="opacity" d="M5.694 11.753 2.299 3.024c-.236-.607.356-1.188.942-.981l.093.039 18 9a.75.75 0 0 1 .097 1.284l-.097.057-1.308.654a3.5 3.5 0 0 0-1.503-.925l.798-.4L4.402 4.294l2.61 6.709h6.627a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.649.743l-.101.007-6.628-.001-2.609 6.71 9.806-4.903a3.5 3.5 0 0 0-.162 1.758L3.334 21.423c-.583.292-1.217-.244-1.065-.847l.03-.095zM20 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C22 22.431 20.714 24 17.5 24S13 22.437 13 20.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSendPerson',
  mixins: [icon]
};
</script>
