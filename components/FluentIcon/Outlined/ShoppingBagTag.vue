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
    <path :fill="fill" :fill-opacity="opacity" d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v4.318l-.969-.954q-.244-.24-.531-.417V8.5h-3.99v2.502h-.509c-.347 0-.68.06-.991.168V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h5.3l1.474 1.5H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7zm4.5 0V5a1.5 1.5 0 0 0-3 0v2zM13 7h2.5V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956zm-.428 11.332 4.001 4.072c.781.796 2.064.8 2.852.012l2.993-2.996a1.99 1.99 0 0 0-.012-2.83l-4.076-4.013A2 2 0 0 0 16.92 12l-2.918.002A2 2 0 0 0 12 13.998v2.937c0 .522.205 1.024.572 1.397M15.996 15a1 1 0 1 1-2 .001 1 1 0 0 1 2-.001" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedShoppingBagTag',
  mixins: [icon]
};
</script>
