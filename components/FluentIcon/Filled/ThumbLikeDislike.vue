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
    <path :fill="fill" :fill-opacity="opacity" d="M6.04 3.177c.265-.616 1.064-1.405 2.18-1.115.7.181 1.204.6 1.489 1.177.248.503.29 1.05.3 1.467A5.5 5.5 0 0 1 9.87 5.92h.194c1.558 0 2.822 1.432 2.332 2.99l-1.15 3.655c-.465 1.482-2.1 2.25-3.577 1.816l-4.512-1.323A2.4 2.4 0 0 1 1.6 11.671l-.438-1.088c-.439-1.09.04-2.286 1.055-2.845l1.542-.85.03-.023c.051-.04.143-.118.263-.245.239-.251.596-.7.962-1.428.178-.353.327-.63.459-.874v-.002c.213-.395.378-.7.566-1.14m11.92 17.646c-.265.616-1.064 1.405-2.18 1.115-.7-.181-1.204-.6-1.489-1.177-.248-.503-.29-1.05-.3-1.467a5.5 5.5 0 0 1 .138-1.214h-.194c-1.558 0-2.822-1.432-2.332-2.99l1.15-3.655c.465-1.482 2.1-2.25 3.577-1.816l4.512 1.323c.7.205 1.284.708 1.557 1.387l.438 1.088c.439 1.09-.04 2.286-1.055 2.845l-1.542.85-.03.023c-.051.04-.143.118-.263.245-.239.251-.596.7-.962 1.428-.178.353-.327.63-.459.874v.002c-.213.395-.378.7-.566 1.14" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledThumbLikeDislike',
  mixins: [icon]
};
</script>
