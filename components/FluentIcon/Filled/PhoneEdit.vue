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
    <path :fill="fill" :fill-opacity="opacity" d="M13.197 7.572 19.1 1.669a2.286 2.286 0 1 1 3.232 3.233l-5.902 5.902a2.7 2.7 0 0 1-1.248.707l-1.83.457a1.087 1.087 0 0 1-1.319-1.318l.458-1.83c.118-.473.362-.904.706-1.248m-.707-.707 4.496-4.496A2.24 2.24 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22h7.5A2.25 2.25 0 0 0 18 19.75v-9.102l-.863.863a3.7 3.7 0 0 1-1.712.97l-1.83.457c-1.53.383-2.914-1.002-2.532-2.53l.458-1.831c.162-.648.497-1.24.97-1.712M13.25 18a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPhoneEdit',
  mixins: [icon]
};
</script>
