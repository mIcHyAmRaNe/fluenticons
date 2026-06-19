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
    <path :fill="fill" :fill-opacity="opacity" d="M13.513 7.555c-.27.395-.54.765-.777 1.076a.916.916 0 0 1-1.472 0c-.25-.33-.538-.724-.824-1.146a18 18 0 0 1-.44-.68c-.55-.895-1-1.82-1-2.462C9 2.686 10.343 1 12 1s3 1.686 3 3.343c0 .526-.302 1.244-.715 1.979a17 17 0 0 1-.772 1.233M12.87 5.22a1.5 1.5 0 1 0-1.742 0 1.49 1.49 0 0 0 1.742 0m-6.793 6.602 3.68-3.563a19 19 0 0 1-.824-1.29L2.99 12.725A3.25 3.25 0 0 0 2 15.06v3.69A2.25 2.25 0 0 0 4.25 21h15.5A2.25 2.25 0 0 0 22 18.75v-3.69a3.25 3.25 0 0 0-.99-2.336l-5.944-5.753a19 19 0 0 1-.825 1.289l2.082 2.015a10.6 10.6 0 0 0-2.02.463c-.682.223-1.384.511-2.04.782-.388.159-.76.312-1.101.44-.983.37-1.878.613-2.782.583-.71-.025-1.467-.22-2.302-.72m-2.045 1.98.936-.907c1.158.771 2.268 1.108 3.36 1.146 1.202.04 2.319-.285 3.361-.678a41 41 0 0 0 1.242-.497 25 25 0 0 1 1.836-.703c.991-.323 1.99-.518 3.066-.426l2.133 2.064c.34.33.533.784.533 1.258v3.69a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-3.69c0-.474.192-.928.533-1.258" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMountainLocationTop',
  mixins: [icon]
};
</script>
