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
    <path :fill="fill" :fill-opacity="opacity" d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21H12v-.018a1.75 1.75 0 0 1-1.18-.724 4 4 0 0 1-.415-.758H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v5.025c.234.24.386.528.456.833.33-.169.695-.223 1.044-.172zM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75m11.03 8.22a.75.75 0 1 0-1.06 1.06l.22.22H14.5a3.5 3.5 0 0 0-2.863 5.513.75.75 0 0 0 1.226-.863A2 2 0 0 1 14.5 15.5h1.94l-.22.22a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06zm4.082 2.766a.75.75 0 1 0-1.226.864A2 2 0 0 1 18.5 19.5h-1.94l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h1.94a3.5 3.5 0 0 0 2.862-5.514" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCalendarArrowRepeatAll',
  mixins: [icon]
};
</script>
