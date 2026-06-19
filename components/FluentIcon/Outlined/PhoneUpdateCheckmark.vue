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
    <path :fill="fill" :fill-opacity="opacity" d="M8.25 22h4.56a6.5 6.5 0 0 1-1.078-1.5H8.25a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v6.826a6.6 6.6 0 0 1 1.5-.057V4.25A2.25 2.25 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22m3-6.291a6.5 6.5 0 0 1 1.5-2.646V9.508l.961.961a.75.75 0 0 0 .977.073l.084-.073a.75.75 0 0 0 .073-.976l-.073-.084-2.242-2.242-.038-.036-.062-.049-.067-.041-.06-.03-.101-.036-.063-.015-.092-.011h-.094l-.091.011-.097.025-.112.047-.076.046-.107.089-2.242 2.242a.75.75 0 0 0 .976 1.133l.085-.073.96-.96zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPhoneUpdateCheckmark',
  mixins: [icon]
};
</script>
