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
    <path :fill="fill" :fill-opacity="opacity" d="M12.002 1.999c5.523 0 10.001 4.478 10.001 10.002q0 .395-.03.783a6.5 6.5 0 0 0-1.474-1.052 8.5 8.5 0 0 0-.233-1.733h-3.358q.048.504.073 1.021a6.5 6.5 0 0 0-1.49.296A19 19 0 0 0 15.4 10H8.605a19 19 0 0 0 .135 5h2.758q-.298.714-.422 1.5H9.063c.598 2.215 1.601 3.735 2.654 3.97a6.5 6.5 0 0 0 1.066 1.502q-.387.03-.781.03C6.478 22.002 2 17.524 2 12.001 2 6.477 6.478 1.999 12.002 1.999M7.51 16.501H4.787a8.53 8.53 0 0 0 4.095 3.41c-.523-.82-.954-1.846-1.27-3.015zM7.095 10H3.737l-.004.017a8.5 8.5 0 0 0-.233 1.984c0 1.056.193 2.067.545 3h3.173a20.9 20.9 0 0 1-.123-5m1.788-5.91-.023.008A8.53 8.53 0 0 0 4.252 8.5H7.3c.313-1.752.86-3.278 1.583-4.41m3.119-.591-.116.005C10.62 3.62 9.398 5.622 8.83 8.5h6.343c-.566-2.87-1.783-4.869-3.045-4.995zm3.12.59.106.175c.67 1.112 1.178 2.572 1.475 4.237h3.048a8.53 8.53 0 0 0-4.338-4.29zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6 3a.5.5 0 0 0 1 0v-4.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708L17 15.707z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedGlobeArrowUp',
  mixins: [icon]
};
</script>
