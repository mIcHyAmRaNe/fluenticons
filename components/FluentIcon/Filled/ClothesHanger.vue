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
    <path :fill="fill" :fill-opacity="opacity" d="M12 4.5a1.5 1.5 0 0 0-1.376.9 1 1 0 0 1-1.832-.8q.165-.376.408-.7a3.5 3.5 0 1 1 4.294 5.266 1.3 1.3 0 0 0-.414.293c-.08.092-.08.137-.08.142 0 .037.02.072.052.09l7.543 4.19A2.731 2.731 0 0 1 19.27 19H4.743a2.743 2.743 0 0 1-1.37-5.12L9 10.635a1 1 0 0 1 1 1.732l-5.628 3.247A.743.743 0 0 0 4.743 17H19.27a.731.731 0 0 0 .355-1.37l-7.543-4.191A2.1 2.1 0 0 1 11 9.602c0-1.208.984-1.935 1.64-2.244A1.5 1.5 0 0 0 12 4.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledClothesHanger',
  mixins: [icon]
};
</script>
