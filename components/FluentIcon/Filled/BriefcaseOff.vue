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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-.948-.948A3.2 3.2 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-5.04A4.73 4.73 0 0 0 5.25 14H10a1 1 0 0 0 1 1h2c.26 0 .497-.101.675-.265l-3.411-3.41A1 1 0 0 0 10 12v.5H5.25a3.25 3.25 0 0 1-.295-6.484L2.22 3.28a.75.75 0 0 1 0-1.06M22 17.75c0 .324-.049.636-.137.932L17.182 14h1.568c1.258 0 2.4-.49 3.25-1.29zM13.75 2A2.25 2.25 0 0 1 16 4.25V6h2.75q.084 0 .167.004a3.25 3.25 0 0 1-.167 6.496h-3.068L8 4.818V4.25A2.25 2.25 0 0 1 10.25 2zm-3.5 1.5a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBriefcaseOff',
  mixins: [icon]
};
</script>
