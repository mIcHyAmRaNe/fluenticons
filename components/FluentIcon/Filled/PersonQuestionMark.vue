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
    <path :fill="fill" :fill-opacity="opacity" d="M12.023 14A6.47 6.47 0 0 0 11 17.5c0 1.63.6 3.12 1.592 4.262q-1.193.24-2.592.24c-3.42 0-5.944-1.073-7.486-3.237a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 4.253 14zm5.477-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 7.751a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m0-5.877c-1.047 0-1.864.818-1.853 1.955a.5.5 0 0 0 1-.01c-.006-.579.36-.945.853-.945.473 0 .854.392.854.95 0 .192-.055.342-.224.561l-.094.116-.1.113-.264.29-.137.158c-.383.456-.535.792-.535 1.31a.5.5 0 1 0 1 0c0-.203.059-.36.24-.59l.084-.105.101-.115.266-.29.135-.156c.378-.45.528-.783.528-1.292 0-1.104-.822-1.95-1.854-1.95M10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonQuestionMark',
  mixins: [icon]
};
</script>
