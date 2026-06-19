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
    <path :fill="fill" :fill-opacity="opacity" d="M3.75 5a.75.75 0 0 0-.75.75V11c0 5.001 2.958 8.676 8.725 10.948a.75.75 0 0 0 .55 0C18.042 19.676 21 16 21 11V5.75a.75.75 0 0 0-.75-.75c-2.663 0-5.258-.943-7.8-2.85a.75.75 0 0 0-.9 0C9.008 4.057 6.413 5 3.75 5m.75 6V6.478c2.577-.152 5.08-1.09 7.5-2.8 2.42 1.71 4.923 2.648 7.5 2.8V11c0 4.256-2.453 7.379-7.5 9.442C6.953 18.379 4.5 15.256 4.5 11m5.574 4.507c-.29-.77-.487-1.718-.551-2.757H8.07a4 4 0 0 0 2.004 2.757m1.524-.239c.169.372.311.561.402.655.09-.094.233-.283.402-.655.28-.614.498-1.488.572-2.518h-1.948c.074 1.03.292 1.904.572 2.518m0-6.536c-.28.614-.498 1.488-.572 2.518h1.948c-.074-1.03-.292-1.904-.572-2.518-.169-.372-.311-.561-.402-.655-.09.094-.233.283-.402.655m2.328 6.775a4 4 0 0 0 2.004-2.757h-1.453c-.065 1.04-.26 1.986-.55 2.757m.55-4.257h1.454a4 4 0 0 0-2.004-2.757c.29.77.486 1.718.55 2.757m-6.406 0h1.453c.064-1.04.26-1.986.55-2.757A4 4 0 0 0 8.07 11.25M12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedShieldGlobe',
  mixins: [icon]
};
</script>
