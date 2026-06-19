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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.273 3.274-2.865 3.119-.044.052-.038.055c-.34.394-.546.908-.546 1.47v3.496a3.25 3.25 0 0 0 3.25 3.25h2.499a3.25 3.25 0 0 0 3.25-3.25l-.001-2.242h.445L13 14.061v.685a3.25 3.25 0 0 0 3.25 3.25h.685l3.784 3.785a.75.75 0 0 0 1.061-1.061zM7.94 9l-2.656-.001 1.272-1.384zm5.364 1.121 7.297 7.297A3.25 3.25 0 0 0 22 14.746V11.25c0-.53-.183-1.017-.489-1.4a.8.8 0 0 0-.122-.179l-3.642-3.947-.133-.132A2.25 2.25 0 0 0 16.093 5h-.843l-.102.007A.75.75 0 0 0 15.25 6.5h.843l.103.007a.75.75 0 0 1 .448.234L18.727 9H15.25c-.831 0-1.557.452-1.947 1.122" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledGlassesOff',
  mixins: [icon]
};
</script>
