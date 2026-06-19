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
    <path :fill="fill" :fill-opacity="opacity" d="M11.111 17.157 8.88 14.586a.25.25 0 0 0-.19-.086h-1.5l-3.45 3.223-.009.01a2.5 2.5 0 0 0 3.536 3.535l.009-.01zm4.884-5.186c.298-.212.723-.33 1.237-.362 1.622-.099 3.413-.891 4.449-1.927a4.5 4.5 0 1 0-6.364-6.364c-.894.894-1.607 2.35-1.849 3.775q.032.24.032.485v2.113a.25.25 0 0 0 .086.189zM16.25 6a.75.75 0 0 1 .75.75c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5 2.75 2.75 0 0 1-2.75-2.75.75.75 0 0 1 .75-.75M4.976 2.806a2.75 2.75 0 0 1 3.89 0l2.828 2.829a2.75 2.75 0 0 1 .805 1.944v2.113c0 .362.157.707.43.944l7.172 6.224.019.02a3 3 0 1 1-4.243 4.242l-.018-.019-6.225-7.172a1.25 1.25 0 0 0-.944-.43H6.582a2.75 2.75 0 0 1-1.944-.805L1.806 9.867a2.75 2.75 0 0 1 0-3.89zM7.28 4.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06zM3.97 7.22a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSpatulaSpoon',
  mixins: [icon]
};
</script>
