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
    <path :fill="fill" :fill-opacity="opacity" d="M20.495 4a.45.45 0 0 0-.497-.497L7.937 4.843a.45.45 0 0 0-.269.766l1.798 1.797a.75.75 0 0 1 0 1.061l-5.834 5.834a.45.45 0 0 0 0 .636l5.429 5.43a.45.45 0 0 0 .636 0l5.834-5.834a.75.75 0 0 1 1.061 0l1.798 1.797a.45.45 0 0 0 .765-.268zm-.663-1.988a1.95 1.95 0 0 1 2.154 2.154l-1.34 12.061c-.18 1.625-2.161 2.32-3.317 1.164l-1.267-1.267-5.304 5.303a1.95 1.95 0 0 1-2.758 0l-5.429-5.429a1.95 1.95 0 0 1 0-2.758l5.304-5.303-1.268-1.268c-1.156-1.156-.461-3.136 1.164-3.317z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowOutlineUpRight',
  mixins: [icon]
};
</script>
