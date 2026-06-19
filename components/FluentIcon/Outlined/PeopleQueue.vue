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
    <path :fill="fill" :fill-opacity="opacity" d="M7.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M3 11.75c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v4.75a4.5 4.5 0 1 1-9 0zm1.75-.25a.25.25 0 0 0-.25.25v4.75a3 3 0 1 0 6 0v-4.75a.25.25 0 0 0-.25-.25zm5.777-2.886a3 3 0 1 0 0-5.229c.327.378.584.818.752 1.3a1.5 1.5 0 1 1 0 2.631 4 4 0 0 1-.752 1.298m.333 12.24q.548.144 1.14.146a4.5 4.5 0 0 0 4.5-4.5v-4.75A1.75 1.75 0 0 0 14.75 10h-2.38c.343.415.566.933.618 1.5h1.76a.25.25 0 0 1 .25.25v4.75a3 3 0 0 1-2.887 2.998c-.339.52-.762.978-1.252 1.356m4.167-12.24a3 3 0 1 0 0-5.229c.327.378.584.818.752 1.3a1.5 1.5 0 1 1 0 2.631 4 4 0 0 1-.752 1.298m.333 12.24q.548.144 1.14.146a4.5 4.5 0 0 0 4.5-4.5v-4.75A1.75 1.75 0 0 0 19.25 10h-2.38c.343.415.567.933.618 1.5h1.76a.25.25 0 0 1 .25.25v4.75a3 3 0 0 1-2.887 2.998c-.339.52-.762.978-1.252 1.356" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPeopleQueue',
  mixins: [icon]
};
</script>
