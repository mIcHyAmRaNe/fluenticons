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
    <path :fill="fill" :fill-opacity="opacity" d="m15.422 19.5-.175.758a2.25 2.25 0 0 1-2.018 1.735l-.174.007h-2.111a2.25 2.25 0 0 1-2.147-1.577l-.046-.167-.174-.756zm.348-1.5.209-.901A5.73 5.73 0 0 0 12 15.5a5.73 5.73 0 0 0-3.978 1.598L8.23 18zM12 14a7.2 7.2 0 0 0-4.357 1.455l-.055-.239a.25.25 0 0 0-.071-.124C5.687 13.344 4.75 11.387 4.75 9.25a7.25 7.25 0 1 1 14.5 0c0 2.137-.936 4.093-2.765 5.84a.25.25 0 0 0-.071.125l-.056.24A7.2 7.2 0 0 0 12 14m-1.75-4.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M12 6a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 12 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLightbulbPerson',
  mixins: [icon]
};
</script>
