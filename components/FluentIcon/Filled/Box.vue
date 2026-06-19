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
    <path :fill="fill" :fill-opacity="opacity" d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-2.19.888 9.592 3.73 3.374-1.303a1.8 1.8 0 0 0-.46-.275zM22 7.191l-9.25 3.574v10.923q.336-.068.659-.199l7.498-3.04A1.75 1.75 0 0 0 22 16.827zM11.25 21.688V10.765L2 7.191v9.637a1.75 1.75 0 0 0 1.093 1.621l7.498 3.04q.323.13.659.2M2.633 5.828 12 9.447l3.917-1.514-9.543-3.71-3.281 1.33q-.256.104-.46.275" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBox',
  mixins: [icon]
};
</script>
