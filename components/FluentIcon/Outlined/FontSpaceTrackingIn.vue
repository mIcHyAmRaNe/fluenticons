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
    <path :fill="fill" :fill-opacity="opacity" d="m8.446 16.147.085.073 2.25 2.25a.75.75 0 0 1 .072.976l-.072.084-2.25 2.25a.75.75 0 0 1-1.134-.976l.073-.084.969-.971H3.75a.75.75 0 0 1-.102-1.492l.102-.007 4.689-.001-.97-.969a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073m7.108 0a.75.75 0 0 1 .883-.007l.093.08.073.084a.75.75 0 0 1 .007.882l-.08.094-.969.969h4.69a.75.75 0 0 1 .101 1.494l-.102.007-4.689-.001.97.97.072.085a.75.75 0 0 1-1.049 1.049l-.084-.073-2.25-2.25-.073-.084a.75.75 0 0 1-.007-.883l.08-.093 2.25-2.25zM8.836 2.279l.062.092.05.106 4.5 11.5a.75.75 0 0 1-1.353.639l-.043-.093-1.236-3.156H5.683L4.45 14.523a.75.75 0 0 1-.875.456l-.097-.03a.75.75 0 0 1-.456-.875l.03-.097 4.5-11.5c.22-.561.946-.627 1.285-.198m10.76.106a.75.75 0 0 1 1.383.541l-.03.097-4.5 11.5-.05.106a.75.75 0 0 1-1.297 0l-.05-.105-4.5-11.5-.03-.098a.75.75 0 0 1 .354-.826l.1-.048.098-.03a.75.75 0 0 1 .826.354l.049.1 3.801 9.716 3.802-9.715zM8.25 4.808 6.27 9.867h3.96z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedFontSpaceTrackingIn',
  mixins: [icon]
};
</script>
